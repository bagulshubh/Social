const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        reqired:true,
    },
    emailVerityToken:{
        type:String,
        required:true,
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    token:{
        type:String,
        default:""
    },
    password:{
        type:String,
        required:true
    },
    profileImage:{
        type:String,
        default: null
    },
    createAt:{
        type:Date,
        default:Date.now()
    },

})

module.exports = mongoose.model("User",userSchema);

