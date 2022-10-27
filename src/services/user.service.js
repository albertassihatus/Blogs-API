const { User } = require('../models');

const createUser = async (body) => {
    const newUser = await User.create(body);
  
    return newUser;
  };

  const getAll = async () => {
    const users = await User.findAll();
  
    return users;
  };

module.exports = {
    createUser,
    getAll,
  };