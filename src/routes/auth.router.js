const express = require('express');
const authController = require('../controllers/auth.controller');
const loginValidate = require('../middlewares/loginValidate');

const router = express.Router();

router.post('/', loginValidate, authController.login);

module.exports = router;