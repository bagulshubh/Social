const express = require("express");
const router = express.Router();
const { createPost, getPost } = require("../controller/PostController");
const {auth}  = require("../middleware/authMiddleware");


router.post("/createPost", auth, createPost);
router.get("/:postId", getPost);

module.exports = router;
