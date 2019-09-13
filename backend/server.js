const express = require('express');
const bodyparser =  require('body-parser');
var app = express();
const path = require('path');
app.use(bodyparser.json());
const mongoose = require('mongoose');
var aboutusController = require('./controller/aboutusController');
var categoryController = require('./controller/categoriesController');
var jobsController = require('./controller/jobController');
var blogsController =  require ('./controller/blogsController');
var bannerController = require ('./controller/bannerController');
var teamController = require ('./controller/teamController');
var productController = require ('./controller/productController');
var authController = require ('./controller/authController');
var contactController = require('./controller/contactusController');
var candidateController = require ('./controller/candidateController');
var commentController = require('./controller/commentsController');
mongoose.connect('mongodb://localhost:27017/swicn', (err)=>{
    if(!err){
        console.log('DB is connected');
    }
    else{
        console.log('Error is db connection:' + JSON.stringify(err, undefined, 2));
    }
})
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

  const port = process.env.PORT || 8080;
app.listen(port , ()=>{
    console.log('App is listing at port  :' + port)
})
app.use('/aboutus', aboutusController);
app.use('/category', categoryController);
app.use('/jobs', jobsController);
app.use('/blogs', blogsController);
app.use('/comments', commentController);
app.use('/banner', bannerController);
app.use('/team', teamController);
app.use('/products', productController);
app.use('/user', authController);
app.use('/contact', contactController);
app.use('/candidates', candidateController);
app.use('/images', express.static(path.join("./images")));
app.use('/resume', express.static(path.join("./resume")));