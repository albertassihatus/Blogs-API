const { User } = require('../models');

const loginValidate = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const user = await User.findOne({
      where: { email, password },
    });
      
    if (!user) {
        return res.status(400)
    .json({ message: 'Invalid fields' });
    }
      next();
   };
  
   module.exports = loginValidate;