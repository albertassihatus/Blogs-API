const express = require('express');

// const { nameValidate } = require('../middlewares/newUserValid');

const authMiddleware = require('../middlewares/auth.middleware');

const categoryController = require('../controllers/category.controller');
    
const router = express.Router();

router.post('/', authMiddleware.validateToken, categoryController.createCategory);

router.get('/', authMiddleware.validateToken, categoryController.getAllCat);

module.exports = router;