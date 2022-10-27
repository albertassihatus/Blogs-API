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

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getById(id);
  
    if (!user) return res.status(404).json({ message: 'User does not exist' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
    createUser,
    getAll,
    getById,
  };