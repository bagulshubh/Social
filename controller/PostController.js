const Post = require("../modules/post");
const User = require("../modules/user");
const {uploadImageToCloudinary} = require("../utils/imageUploader")

exports.createPost = async(req,res) => {
    try{

        const {discription, media, postType} = req.body;
        const userId = req.userId;

        const file = req.files.media;

        if(!discription || !postType) {
            return res.status(400).json({
                success: false,
                message: "Discription and postType are required"
            })
        }

        const user = await User.findById(userId);
        if(!user) {
            return res.status(400).json({
                success:false,
                message : "User does not exists"
            })
        }
        
        const image = await uploadImageToCloudinary(
            file,
            process.env.FOLDER_NAME,
            1000,
            1000
        )
        const imageUrl = image.secure_url;

        const createdPost = await Post.create({discription, media  : imageUrl, postType, userId});

        user.posts.push(createdPost._id);
        await user.save();

        return res.status(200).json({
            success: true,
            message : "Post Created Successfully",
            body : createdPost
        })

    } catch(err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
} 

exports.getPost = async(req,res) => {
    try {

        const {postId} = req.params;

        if(!postId) {
            return res.status(400).json({
                success:false,
                message : "PostId required"
            })
        }

        const post = await Post.findById(postId);

        return res.status(200).json({
            success: true,
            message: "Post found",
            body : post
        })

    } catch(err) {
        return res.status(500).json({
            success: false,
            message : err.message
        })
    }
}

exports.getUserPosts = async(req,res) => {
    try{

        const userId = req.userId;

        if(!userId) {
            return res.status(400).json({
                success:false,
                message:"Userid required"
            })
        }

        const posts = await Post.find({userId : userId});

        return res.status(200).json({
            success:true,
            mesasge:"Post found",
            body: posts
        })

    } catch(err) {
        return res.status(500).json({
            success: false,
            message : err.message
        })
    }
}
