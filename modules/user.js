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
    event:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Event",
        default: []
    }],
    savedPost:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
        default: []
    }],
    followers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        default: []
    }],
    following:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        default: [] //show their stories
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

