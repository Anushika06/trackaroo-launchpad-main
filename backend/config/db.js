const mongoose=require('mongoose')

async function connectDB(dbURL){
    try{
    await mongoose.connect(dbURL)
    console.log('DB Connected')
    }catch(error){
        console.log(error.message);
    }
}


module.exports=connectDB;