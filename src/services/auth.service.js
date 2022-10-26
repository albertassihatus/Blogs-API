const Joi = require('joi');
const jwtUtil = require('../utils/jwt.util');

const { User } = require('../models');

const validateBody = (params) => {
  const schema = Joi.object({
    email: Joi.string().min(1).email(),
    password: Joi.string(),
  });

  const { error, value } = schema.validate(params);

  if (error) throw error;

  return value;
};

const validateLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    const e = new Error('Usuário não existe ou senha inválida');
    e.name = 'UnauthorizedError';
    throw e;
  }
  
  /* 
  Nesta linha estamos usando o conceito de rest operator e destruturação
  para remover o campo `password` do objeto que vai ser usado para criar o token.
  */
  const { password: _, ...userWithoutPassword } = user.dataValues;

  /* 
  Precisamos usar o `.dataValues` pois o sequelize sempre encapsula os atributos (colunas)
  dentro desse atributo do objeto retornado pelos métodos.
  */
  const token = jwtUtil.createToken(userWithoutPassword);

  return token;
};

const validateToken = (token) => {
  if (!token) {
    const e = new Error('Token é obrigatório');
    throw e;
  }

  const user = jwtUtil.validateToken(token);
  return user;
};

module.exports = {
  validateBody,
  validateLogin,
  validateToken,
};
