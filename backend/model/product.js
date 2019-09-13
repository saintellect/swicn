const mongoose = require ('mongoose');
var Product = mongoose.model('Product', {
    productname : {type : String , required : true},
    category : {type : String, required: true},
    size : {type: String , required : false},
    shortdescription : {type: String , required : true},
    colors :{type: String, required: false},
    amazonLink:{type:String, required:false},
    alibabaLink:{type:String, required:false},
    aliexpressLink:{type:String, required: false},
    imagePath :{type:Array},
    videopath : {type: String, required : false},
    productdetails : {type:String, required: true},
    Isfeatured : {type:Boolean, required:true}
}) 

module.exports = {Product}