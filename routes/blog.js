const express = require("express")
const router = express.Router()

//import route
const {createComment} = require("../controllers/CommentController")
const {createPost, getAllPosts} = require("../controllers/PostController")
const {likePost, unlikePost} = require("../controllers/LikeController")

//create mapping
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost) 

//export
module.exports = router