const mongoose=require('mongoose');
const validator=require('validator');
const contactSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    validate: [validator.isEmail, "Please Enter Valid Email"]
},
phone:{
    type:Number,
    required:true,

},
subject:{
    type:String,
    required:true,
},
})
module.exports=mongoose.model("contactModel",contactSchema)