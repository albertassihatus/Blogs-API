const { User } = require('../models');

const nameValidate = (req, res, next) => {
    const { displayName } = req.body;

    if (displayName.length < 8) {
      return res
        .status(400)
        .json({ message: '"displayName" length must be at least 8 characters long' }); 
    }

    next();
  };

const emailValidate = (req, res, next) => {
  const { email } = req.body;

  if (!email.includes('@') || !email.endsWith('.com')) {
    return res.status(400).json({
       message: '"email" must be a valid email',
    });
  }
  next();
};

const passwordValidate = (req, res, next) => {
    const { password } = req.body;
    if (password.length < 6) {
        return res.status(400)
        .json({ message: '"password" length must be at least 6 characters long' }); 
      }

    next();
  };

const existEmail = async (req, res, next) => {
    const { email } = req.body;
    const user = await User.findOne({
      where: { email },
    });
  
    if (user) {
        return res.status(409)
    .json({ message: 'User already registered' });
    }
    next();
  };

module.exports = {
    nameValidate,
    emailValidate,
    passwordValidate,
    existEmail,
};