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
    companyName:{
        type: String
    },

    email:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    }, 
    additionalMsg:{
        type:String
    }
})

const userModel=mongoose.model('user_info',userSchema);

module.exports=userModel
