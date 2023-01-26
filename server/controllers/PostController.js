const catchAsyncError = require("../middelwares/catchAsyncError")
const Post = require('../Model/Posts');
const ErrorHandler = require("../utils/Errorhandler");

exports.uploadPost = catchAsyncError(async(req,res, next) =>{
    const user = req.user;
    const {filename} = req.file;
    const image = `http://localhost:8080/upload/${filename}`
    const {caption, location} = req.body
    if(!user){
        return next(new ErrorHandler("No user found Plese Login Again", 400))
    }else{
        const post = await Post.create({image:image, caption:caption, location:location});
        if(!post){
            return next(new ErrorHandler("Someting wrong Happend", 400))
        }else{
            await post.save()
            return res.status(200).json({sucess:true,message:post})
        }
    }
    
})

exports.getPost = catchAsyncError(async(req,res, next) =>{
        const post = await Post.find();
        if(!post){
            return next(new ErrorHandler("Someting wrong Happend", 400))
        }else{

            return res.status(200).json({sucess:true,message:post})
        }
})

exports.likePost = catchAsyncError(async(req,res,next) => {
  const {user} = req.params
  const {id} = req.body
const post  = await Post.findById(id)
if(!post){
    return next(new ErrorHandler("Someting wrong Happend", 400))
}else{  
        if(post.user == user){
         post.likes--  
        } else{
            post.likes++ 
        }
}
return res.status(200).json({sucess:true,message:post.likes})
})