const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
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
    bio:{
        type:String,
        default: ""
    },
    address:{
        type:String,
        default : ""
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
        default: []
    }],
    followers:[{
        type: String,
        default: []
    }],
    following:[{
        type:String,
        default: []
    }],
    about:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"About"
    },
    profileImage:{
        type:String,
        default: null
    },
    createAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt: {
        type:Date,
        default:Date.now()
    }

})

module.exports = mongoose.model("User",userSchema);

