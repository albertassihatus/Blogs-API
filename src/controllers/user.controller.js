const userService = require('../services/user.service');
const jwtUtil = require('../utils/jwt.util');

const createUser = async (req, res) => {
  const newUser = await userService.createUser(req.body);

  const { password: _, ...userWithoutPassword } = newUser.dataValues;

  const token = jwtUtil.createToken(userWithoutPassword);

  return res.status(201).json({ token });
};

const getAll = async (_req, res) => {
    const users = await userService.getAll();

    return res.status(200).json(users);
};

module.exports = {
    createUser,
    getAll,
  };