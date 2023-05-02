const Post = require('../models/postModel')
const Comment = require('../models/commentModel')

exports.createComment = async (req, res) => {
  try{
    //fetch data from req body
    const {post, user,body} = req.body

    //create comment 
    const comment = new Comment({
      post, user, body
    })

    //save the new comment into database
    const savedComment = await comment.save()

    //find the post by ID, add new comment to the comments array
    const updatedPost = Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new: true}) //push operator is used to update
                        .populate("comments") //populate the comments array with comment documents
                        .exec()

    res.json({
      post: updatedPost,
    })
  }
  catch(error){
    return res.status(500).json({
      error: "error while creating comment"
    })
  }
}