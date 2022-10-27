const express = require('express');

const userController = require('../controllers/user.controller');

const { nameValidate,
    emailValidate,
    passwordValidate,
    existEmail } = require('../middlewares/newUserValid');

const router = express.Router();

router.post('/', nameValidate,
emailValidate,
passwordValidate,
existEmail, userController.createUser);

router.get('/', userController.getAll);

module.exports = router;