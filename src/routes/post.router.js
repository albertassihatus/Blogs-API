const express = require('express');

const authMiddleware = require('../middlewares/auth.middleware');

const { postValidate } = require('../middlewares/postValidate');

const postController = require('../controllers/post.controller');
    
const router = express.Router();

router.post('/',
authMiddleware.validateToken,
postValidate,
postController.createPost);

router.get('/', authMiddleware.validateToken, postController.getAll);

router.get('/:id', authMiddleware.validateToken, postController.getById);

module.exports = router;