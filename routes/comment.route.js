const {Router} = require('express')
const { commentsController } = require("../controllers/comments.controller");

const router = Router();

router.post("/comments",commentsController.addComment);
router.get("/comments", commentsController.getComment);
router.delete("/comments/:Id", commentsController.deleteCommentById);



module.exports = router 