const categoryService = require('../services/category.service');
// const jwtUtil = require('../utils/jwt.util');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }
    const newCategory = await categoryService.createCategory(name);

    return res.status(201).json(newCategory);
  } catch (e) {
    console.log(e.message);
    res.status(401).json({ message: e });
  }
};

module.exports = {
  createCategory,
  };