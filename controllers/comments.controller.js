const Comment = require("../models/Comment.model");

module.exports.commentsController ={
    addComment: async(req, res) =>{
        try{
       const comments =await Comment.create({
        text: req.body.text
            })
            res.json(comments)
        }  catch(error){
            res.json(error)
        }
    },

    getComment: async(req, res) =>{
        try{
            const comments = await Comment.find()
            res.json(comments)
        } catch(error){
            res.json(error)
        }
    },

    deleteCommentById: async(req, res) =>{
        try{
            const comments = await Comment.findByIdAndDelete(req.params.Id)
            res.json(comments)
        } catch(error){
            res.json(error)
        }
    }
}