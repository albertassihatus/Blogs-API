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
  const posts = await postService.getAll();

  return res.status(200).json(posts);
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postService.getById(id);
  
    if (!post) return res.status(404).json({ message: 'Post does not exist' });

    return res.status(200).json(post);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
    createPost,
    getAll,
    getById,
  };