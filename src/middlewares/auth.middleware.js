const authService = require('../services/auth.service');

const validateToken = (req, res, next) => {
  try {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const { user } = authService.validateToken(token);

  req.auth = { user };
  next();
} catch (error) {
  return res.status(401).json({ message: 'Expired or invalid token' });
}
};

module.exports = {
  validateToken,
};