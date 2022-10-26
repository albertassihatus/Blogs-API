const { User } = require('../models');

const createUser = async (body) => 
User.create(body);

module.exports = {
    createUser,
  };