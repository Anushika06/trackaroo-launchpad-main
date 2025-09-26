const mongoose=require('mongoose');
const {Schema}=mongoose;

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    phoneNum:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    }
})

const userModel=mongoose.model('user_info',userSchema);

module.exports=userModel
