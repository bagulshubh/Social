const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({

    text: {
        type:String,
        default:""
    },
    likes : {
        type:Number,
        default : 0
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

module.exports = mongoose.model("Comment", commentSchema);

