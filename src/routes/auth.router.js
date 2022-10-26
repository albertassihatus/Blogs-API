const express = require('express');
const authController = require('../controllers/auth.controller');
const emailValidate = require('../middlewares/emailValidate');

const router = express.Router();

router.post('/', authController.login, emailValidate);

module.exports = router;