const { User } = require('../models');

const createUser = async (body) => {
    const newUser = await User.create(body);
  
    return newUser;
  };

module.exports = {
    createUser,
  };