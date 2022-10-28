const postService = require('../services/post.service');

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const newPost = await postService.createPost(title, content, categoryIds);
    return res.status(201).json(newPost);
  } catch (e) {
    console.log(e.message);
    res.status(400).json({ message: 'Algo deu errado' });
  }
};

const getAll = async (_req, res) => {
  const users = await postService.getAll();

  return res.status(200).json(users);
};

module.exports = {
    createPost,
    getAll,
  };