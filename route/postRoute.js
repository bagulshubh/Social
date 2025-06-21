const express = require("express");
const router = express.Router();
const { createPost, getPost, getUserPosts } = require("../controller/PostController");
const {auth}  = require("../middleware/authMiddleware");


router.post("/createPost", auth, createPost);
router.get("/:postId",auth, getPost);
router.get("/user", auth, getUserPosts);

module.exports = router;
