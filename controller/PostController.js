const Post = require("../modules/post");
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
        
        const image = await uploadImageToCloudinary(
            file,
            process.env.FOLDER_NAME,
            1000,
            1000
        )
        const imageUrl = image.secure_url;

        //TODO : save post into user

        const createdPost = await Post.create({discription, media  : imageUrl, postType, userId});
        
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
