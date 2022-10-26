const express = require('express');

const authRouter = require('./auth.router');
const userRouter = require('./user.router');
const emailValidate = require('../middlewares/emailValidate');

const routers = express.Router();

routers.use('/login', authRouter, emailValidate);

routers.use('/user', userRouter);

module.exports = routers;