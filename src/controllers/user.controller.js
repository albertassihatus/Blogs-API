const userService = require('../services/user.service');
const jwtUtil = require('../utils/jwt.util');

const createUser = async (req, res) => {
  const newUser = await userService.createUser(req.body);

  const token = jwtUtil.createToken(newUser);
  
  return res.status(201).json({ token });
};

module.exports = {
    createUser,
  };