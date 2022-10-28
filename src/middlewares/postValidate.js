const postValidate = (req, res, next) => {
    const { title, content, categoryIds } = req.body;

    if (!title || !content || !categoryIds) {
        return res.status(400).json({ message: 'Some required fields are missing' });
      }

    if (categoryIds.length <= 0) {
      return res
        .status(400)
        .json({ message: '"displayName" length must be at least 8 characters long' }); 
    }

    next();
  };

  module.exports = {
    postValidate,
};
