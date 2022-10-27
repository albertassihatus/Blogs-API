const express = require('express');

const userController = require('../controllers/user.controller');

const authMiddleware = require('../middlewares/auth.middleware');

const { nameValidate,
    emailValidate,
    passwordValidate,
    existEmail } = require('../middlewares/newUserValid');

const router = express.Router();

router.post('/', nameValidate,
emailValidate,
passwordValidate,
existEmail, userController.createUser);

router.get('/', authMiddleware.validateToken, userController.getAll);

router.get('/:id', authMiddleware.validateToken, userController.getById);

module.exports = router;