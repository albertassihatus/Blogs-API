const { BlogPost, User, Category } = require('../models');

const createPost = async (title, content, categoryIds) => {
    const newPost = await BlogPost.create({ title, content, categoryIds });
  
    return newPost;
  };

  const getAll = async () => {
    const getAllPosts = await BlogPost.findAll({
      include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    });

  return getAllPosts;
};

const getById = async (id) => {
  const postId = await BlogPost.findByPk(id, {
    include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
  ],
  });

  return postId;
};

  module.exports = {
    createPost,
    getAll,    
    getById,
  };