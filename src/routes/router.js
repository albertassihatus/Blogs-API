const express = require('express');

const authMiddleware = require('../middlewares/auth.middleware');

const authRouter = require('./auth.router');
const userRouter = require('./user.router');

const routers = express.Router();

routers.use('/login', authRouter);

// routers.use(authMiddleware.validateToken);
routers.use('/user', authMiddleware.validateToken, userRouter);

module.exports = routers;