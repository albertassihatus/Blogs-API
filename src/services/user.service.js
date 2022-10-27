const { User } = require('../models');

const createUser = async (body) => {
    const newUser = await User.create(body);
  
    return newUser;
  };

  const getAll = async () => {
    const users = await User
    .findAll({ attributes: { exclude: ['password'] } });

    return users;
  };

  const getById = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  
    return user;
  };

module.exports = {
    createUser,
    getAll,
    getById,
  };
