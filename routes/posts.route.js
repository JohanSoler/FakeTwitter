var express = require('express');
var router = express.Router();
const postController = require ('../controllers/post.controller'); 

/**
 * TASK:
 * CREATE THE ROUTES ___________________ 
 */
  
/**
 * GET Route to list all post
 */
router.get('/', postController.findAllPost);

/**
 * GET Route to find post by id
 */
router.get('/:idPost', postController.findOnePost);

/**
 * POST Route to create post
 */
router.post ('/',postController.createPost);

/**
 * PUT Route to update an post by id
 */
router.put ('/:idPost',postController.updatePost);

/**
 * DELETE Route to delete an post by id
 */
router.delete ('/:idPost',postController.deletePostByID);

/**
 * DELETE Route to delete all post
 */
router.delete ('/',postController.deleteAllPost);

/**
 * TASK:
 * ADD THE MISSING ROUTES __________________ 
 */
router.get('/date/:date', postController.findAllPostByCreatedDate);

module.exports = router;