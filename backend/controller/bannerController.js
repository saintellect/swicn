const express =  require ('express');
var router = express.Router();
var objId = require('mongoose').Types.ObjectId;
var {Banner} = require('../model/banner');
const multer =  require('multer');

const mime_type ={
    "image/png" : "png",
    "image/jpg" : 'jpg',
    "image/jpeg" : 'jpg',
    "image/gif" : 'gif'
}

const storage = multer.diskStorage({
    destination :(req,file,cb)=>{
        cb(null, '../backend/images')
    },
    filename : (req,file,cb)=>{
        const name = file.originalname.split(' ').join('-');
        const ext = mime_type[file.mimetype]
        cb(null, name + '-' + Date.now() + '.' + ext )
    }
})
router.get('', (req,res)=>{
    Banner.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log('Error in getting banners:' +JSON.stringify(err,undefined,2));
        }
    })
})

router.get('/:id', (req,res)=>{
    if(!objId.isValid(req.params.id)){
        res.status(400).send(`The requested Id is invalid :  ${req.params.id}`);
    }
    else{
        Banner.findById(req.params.id,(err,docs)=>{
            if(!err){
                res.send(docs);
            }
            else{
                console.log('cannot find banner:' + JSON.stringify(err,undefined,2));
            }
        })
    }
})

router.post('', multer({storage : storage}).single("image"),(req,res)=>{
    const url = req.protocol + "://" + req.get("host");
    var banner = new Banner({
        bannertext :req.body.bannertext,
        calltoaction: req.body.calltoaction ,
        imagePath : url + "/images/" + req.file.filename,
   
    })
    banner.save((err,docs)=>{
        if(!err){
        res.send(docs);
        }
        else{
            console.log('error is banner post:' + JSON.stringify(err, undefined,2))
        }
    })
})
router.put(
    "/:id",
    multer({ storage: storage }).single("image"),
    (req, res, next) => {
      let imagePath = req.body.imagePath;
      if (req.file) {
        const url = req.protocol + "://" + req.get("host");
        imagePath = url + "/images/" + req.file.filename
      }
      const banner = {
        _id: req.body.id,
        bannertext :req.body.bannertext,
        calltoaction: req.body.calltoaction ,
        imagePath :imagePath
      
      };
      console.log(banner);
      Banner.findByIdAndUpdate(req.params.id, {$set:banner}, {new:true}, (err,doc)=>{
        if(!err){
            res.send(doc)
        }
        else{
            console.log('error is updating data:' + JSON.stringify(err,undefined,2));
        }
    })
    }
  );


router.delete('/:id', (req,res)=>{
    Banner.findByIdAndRemove(req.params.id, (err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log('error in deleting banner:' + JSON.stringify(err,undefined,2));
        }
    })
})
module.exports = router;