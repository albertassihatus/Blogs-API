const emailValidate = (req, res, next) => {
    const { email } = req.body;

    if (email.length > 0) {
      return res.status(400).json({ message: 'sdfsdf' });
    }
      
      next();
   };

   module.exports = emailValidate;