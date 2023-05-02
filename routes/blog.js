const express = require("express")
const router = express.Router()

//import route
const {createComment} = require("../controllers/CommentController")
const {createPost} = require("../controllers/PostController")

//create mapping
router.post("/comments/create", createComment)
router.post("/posts/create", createPost)

//export
module.exports = router