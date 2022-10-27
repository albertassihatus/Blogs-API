const authService = require('../services/auth.service');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  const user = authService.validateToken(authorization);
  req.user = user;

  next();
};

module.exports = {
  validateToken,
};