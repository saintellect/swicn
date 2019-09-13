const mongoose = require ('mongoose');
var Comments = mongoose.model('Comments',{
    blogid :{type:String},
    name:{type:String},
    email:{type:String},
    contactno:{type:String},
    message:{type:String},
    date:{type:Date},
    status :{type:Boolean}
})

module.exports = {Comments}