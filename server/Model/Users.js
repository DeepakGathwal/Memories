const mongoose = require('mongoose');
const validator = require('validator');
const crypto = require('crypto')


const userSchema = new mongoose.Schema({
    image:{
        type:String,
    },
    fullName:{
        type:String,
        required:[true,'Please Enter Your Name'],
        // maxLength:[20,'Only 20 Latter'],
    },
    phone:{
        type: Number, required: true,
        // maxLength: [13, "it,s enough"],
        // minLength: [10, "it,s not enough"],
        required:[true,'Please Enter Your Phone'],
        unique:true,
    },
    address:{
        type:String,
        required:[true,'Please Enter Your Address'],
    },
    email:{
        type:String,
        required:[true,'Please Enter Your Email'],
        // minLength:[20,'Atleast your name contain 20 charchter'],  
        validator:[validator.Email,'Plese Enter a valid Email'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'Please Enter Your Name'],
        // minLength:[8,'maxLength 6 Latter'],
        // validator:[validator.Email,'Plese Enter a valid Email'],
        unique:true,
     },
    loginAt:{
        type: Date,
        default:Date.now,
    },
})


module.exports = mongoose.model('User',userSchema);