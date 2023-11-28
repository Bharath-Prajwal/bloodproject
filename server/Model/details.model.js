const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:String,
    age:Number,
    address:String,
    location:String,
    bloodgroup:String,
    phonenumber:Number,
    email:String,
    password:String
})
const detailsModel=mongoose.model('details',userSchema)
module.exports=detailsModel