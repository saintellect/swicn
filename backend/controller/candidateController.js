const express = require('express');
const router = express.Router();
var {Candidates} = require('../model/candidate');
const multer = require('multer');
var docId= require('mongoose').Types.ObjectId;
const mime_type ={
    "application/msword" : "doc",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document" : 'docx',
    "text/plain" : 'txt',
    "application/pdf" : 'pdf',
    "application/rtf" : 'rtf'
}
const storage = multer.diskStorage(
    {
        destination : (req, file, cb)=>{
            cb(null, "../backend/resume")
        },
        filename :(req,file,cb)=>{
            const name= file.originalname.toLocaleLowerCase().split(' ').join('-');
            const ext = mime_type[file.mimetype]
            cb(null , name + '-' + Date.now() + '.' + ext)
        }
    }
)

router.get('',(req, res)=>{
    const pageSize = +req.query.pageSize;
    const currentPage = +req.query.currentPage
    var query = {}
    if(pageSize && currentPage){
        query.skip = pageSize * (currentPage - 1)
  query.limit = pageSize
        Candidates.find({},{},query, function(err,data) {
            if(!err){
                res.send(data)
            }
            else{
                console.log("Error:" + JSON.stringify(err,undefined,2));
            }
        })
       
    }
    else{
    Candidates.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log('Error is fetching candidates:' +  JSON.stringify(err,undefined,2));
        }
    }).sort({date : 'desc'})
}
})

router.post('',multer({storage : storage}).single("resume"), (req,res)=>{
  
  
    const url = req.protocol + "://" + req.get("host");
    var path =  url + "/resume/" + req.file.filename;
    console.log(path);
    var candidate = new Candidates({
        name  : req.body.name,
        email  : req.body.email,
        phoneno:req.body.phoneno,
        intrest : req.body.intrest,
        resumePath: path,
        date : req.body.date
    })
    candidate.save((err,docs)=>{
        if(!err){
            res.send(docs)
            //email coding
            const sgMail = require('@sendgrid/mail');
      const SENDGRID_API_KEY = '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'
      sgMail.setApiKey(SENDGRID_API_KEY);

        
      const msg = {
        to: 'manoj.mohapatra986@gmail.com',
        from: 'no-reply.admin@swicn.com',
        subject: 'Candidate Application',
        text: 'You Have Got A New Candidate Request',
        html: `<div style="text-align:left"><h1>Candidate Resume</h1><br>
        <ul style="list-style-type:none">
        <li><h3>Name : ${req.body.name}</h3></li>
        <li><h3>Email : ${req.body.email}</h3></li>
        <li><h3>Contact No. : ${req.body.phoneno}</h3></li>
        <li><h3>Applied For : ${req.body.intrest}</h3></li>
        <li><h3 style="text-decoration:underline"> <a style="color:blue" href="${path}">click here to download resume</a></h3></li><br><br>
        </ul>
     
        </div>`,
      };
      sgMail.send(msg);
      const msg1 = {
        to: req.body.email,
        from: 'no-reply.admin@swicn.com',
        subject: 'Greetings from swicn.com',
        text: 'We have received your resume',
        html: `<b>Dear ${req.body.name} </b> , <br><br><br>
        <p style="font-style:italic; font-size:15px;"> Thank you for your intrest.</p><br>

        <p style="font-size:15px;">Your CV has been forwarded to the concernd team. We will get back to you shortly.</p>
        <br>
        <h2><i>Regards,</i></h2><br>
        <p style="font-size:14px; color:blue:">Team Swicn</p>
        `,

      };
      sgMail.send(msg1);
        }
        else{
            console.log('Error in saving blog :' +JSON.stringify(err, undefined,2));
        }
    })
})

router.delete('/:id',(req,res)=>{
    if(!docId.isValid(req.params.id)){
        res.status(400).send(`The requested id is invalid : ${req.params.id}`);
    }
    else{
        Candidates.findByIdAndRemove(req.params.id, (err,doc)=>{
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