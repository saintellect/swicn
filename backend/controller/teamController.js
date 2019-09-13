const express =  require ('express');
var router = express.Router();
var objId = require('mongoose').Types.ObjectId;
var {Team} = require('../model/team');
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
    Team.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log('Error in getting team members:' +JSON.stringify(err,undefined,2));
        }
    })
})

router.get('/:id', (req,res)=>{
    if(!objId.isValid(req.params.id)){
        res.status(400).send(`The requested Id is invalid :  ${req.params.id}`);
    }
    else{
        Team.findById(req.params.id,(err,docs)=>{
            if(!err){
                res.send(docs);
            }
            else{
                console.log('cannot find member:' + JSON.stringify(err,undefined,2));
            }
        })
    }
})

router.post('', multer({storage : storage}).single("image"),(req,res)=>{
    const url = req.protocol + "://" + req.get("host");
    var team = new Team({
        name :req.body.name,
        designation: req.body.designation ,
        message: req.body.message,
        imagePath : url + "/images/" + req.file.filename,
   
    })
   team.save((err,docs)=>{
        if(!err){
        res.send(docs);
        }
        else{
            console.log('error is member post:' + JSON.stringify(err, undefined,2))
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
      const team = {
        _id: req.body.id,
        name :req.body.name,
        designation: req.body.designation,
        message: req.body.message,
        imagePath :imagePath,
      
      };
      console.log(team);
      Team.findByIdAndUpdate(req.params.id, {$set:team}, {new:true}, (err,doc)=>{
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
    Team.findByIdAndRemove(req.params.id, (err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log('error in deleting member:' + JSON.stringify(err,undefined,2));
        }
    })
})
module.exports = router;