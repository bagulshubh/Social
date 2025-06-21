const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

    discription:{
        type: String,
        required: true
    },
    media:{
        type : String
    },
    postType:{
        type: String,
        enum: ['public', 'private'],
        required: true
    },
    likes:{
        type: Number,
        default: 0
    },
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        default : ""
    }],
    userId : {
        type: String
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

module.exports = mongoose.model("Post", postSchema);

