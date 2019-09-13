const express = require ('express');
var router = express.Router();
var {Product} = require('../model/product');
var docId= require('mongoose').Types.ObjectId;

// const multer = require('multer');
// const mime_type ={
//     "image/png" : "png",
//     "image/jpg" : 'jpg',
//     "image/jpeg" : 'jpg',
//     "image/gif" : 'gif'
// }
// const storage = multer.diskStorage(
//     {
//         destination : (req, file, cb)=>{
//             cb(null, "../backend/images")
//         },
//         filename :(req,file,cb)=>{
//             const name= file.originalname.toLocaleLowerCase().split(' ').join('-');
//             const ext = mime_type[files.mimetype]
//             cb(null , name + '-' + Date.now() + '.' + ext)
//         }
//     }
// )
const multer = require('multer');
const mime_type ={
    "image/png" : "png",
    "image/jpg" : 'jpg',
    "image/jpeg" : 'jpg',
    "image/gif" : 'gif'
}
const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, '../backend/images');
    },
filename : function(req, file, cb){
    const ext = mime_type[file.mimetype]
    cb(null, Date.now()+ file.originalname + '.' + ext);
}

})

const upload = multer({storage : storage,})

router.get('',(req, res)=>{

    const pageSize = +req.query.pageSize;
    const currentPage = +req.query.currentPage
    var query = {}
    if(pageSize && currentPage){
        query.skip = pageSize * (currentPage - 1)
  query.limit = pageSize
        Product.find({},{},query, function(err,data) {
            if(!err){
                res.send(data)
            }
            else{
                console.log("Error:" + JSON.stringify(err,undefined,2));
            }
        })
       
    }
    else{
        Product.find((err,docs)=>{
            if(!err){
                res.send(docs);
            }
            else{
                console.log('Error is fetching blogs:' +  JSON.stringify(err,undefined,2));
            }
        }).sort({productname : 'asc'})
    }

})



    router.get('',(req, res)=>{

    
        Product.find( {'Isfeatured': true} ,(err,docs)=>{
            if(!err){
                res.send(docs);
            }
            else{
                console.log('Error is fetching blogs:' +  JSON.stringify(err,undefined,2));
            }
        }).sort({productname : 'asc'})
    })
router.get('/:id',(req,res)=>{
    if(!docId.isValid(req.params.id)){
        res.status(400).send(`The requested Id is invalid :  ${req.params.id}`);
    }
    else{
        Product.findById(req.params.id , (err,docs)=>{
            if(!err){
                res.send(docs);
            }
            else{
                console.log('Error in getting blog details: ' + JSON.stringify(err,undefined,2));
            }
        })
    }
})


router.post('', upload.array('image', 3), (req,res)=>{
    const url = req.protocol + "://" + req.get("host");
    var files =   req.files.map((k)=>
    url + "/images/" + k.filename)
    var product = new Product({
        productname : req.body.productname,
        category : req.body.category,
        size : req.body.size,
        colors :req.body.colors,
        shortdescription: req.body.shortdescription,
        amazonLink:req.body.amazonLink,
        alibabaLink:req.body.alibabaLink,
        aliexpressLink:req.body.aliexpressLink,
        imagePath:  files,
        videopath : req.body.videopath,
        productdetails : req.body.productdetails,
        Isfeatured : req.body.Isfeatured
    })
    product.save((err,docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            console.log('Error in saving blog :' +JSON.stringify(err, undefined,2));
        }
    })
})

router.put(
    "/:id",
    multer({ storage: storage }).array("image", 3),
    (req, res, next) => {
    
      if (req.files) {
        const url = req.protocol + "://" + req.get("host");
        imagePath = req.files.map((k)=>
        url + "/images/" + k.filename)
      }

      const product = {
        _id: req.body.id,
        productname : req.body.productname,
        category : req.body.category,
        size : req.body.size,
        colors :req.body.colors,
        shortdescription : req.body.shortdescription,
        amazonLink:req.body.amazonLink,
        alibabaLink:req.body.alibabaLink,
        aliexpressLink:req.body.aliexpressLink,
        imagePath: req.body.imagePath || imagePath,
        videopath : req.body.videopath,
        productdetails : req.body.productdetails,
        Isfeatured : req.body.Isfeatured
      };
      console.log(product);
        Product.findByIdAndUpdate(req.params.id, {$set:product}, {new:true}, (err,doc)=>{
        if(!err){
            res.send(doc)
        }
        else{
            console.log('error is updating data:' + JSON.stringify(err,undefined,2));
        }
    })
    }
  );

  router.get('/featured/lists',(req, res)=>{

    
    Product.find( {'Isfeatured': true} ,(err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log('Error is fetching blogs:' +  JSON.stringify(err,undefined,2));
        }
    }).sort({productname : 'asc'})
})
router.get('/category/:categoryname',(req, res)=>{

const categoryname = req.params.categoryname
    Product.find( {'category': categoryname} ,(err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log('Error is fetching blogs:' +  JSON.stringify(err,undefined,2));
        }
    }).sort({productname : 'asc'})
})

router.get('/search/:searchQuery',(req, res)=>{

    const productname = req.params.searchQuery.replace(/\s+/, "");
    console.log(productname);
        Product.find( { productname: { $regex: productname , $options: 'i'} } ,(err,docs)=>{
            if(!err){
                res.send(docs);
            }
            else{
                console.log('Error is fetching blogs:' +  JSON.stringify(err,undefined,2));
            }
        }).sort({productname : 'asc'})
    })
router.delete('/:id', (req,res)=>{
    if(!docId.isValid(req.params.id)){
        res.status(400).send(`The requested id is invalid : ${req.params.id}`);
    }
    else{
        Product.findByIdAndRemove(req.params.id, (err,doc)=>{
            if(!err){
                res.send(doc);
            }
            else{
                console.log('error in deleting data :' + JSON.stringify(err, undefined,2) );
            }
        })
    }
})
module.exports = router