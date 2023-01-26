const mongoose = require('mongoose');

const Posts = new mongoose.Schema({
    image:{
       type:String,
       required:true,
    },
   owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
   },
   createdAt:{
    type:Date,
    default:Date.now()
   },
   likes:[
   {
    user:{ type:mongoose.Schema.Types.ObjectId,
    ref:"User"
}
   }
],
   commemnts:[
    {
        user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    commemnt:{
        type:String,
        required:true
    }}
   ] 
})

module.exports = mongoose.model('post',Posts);