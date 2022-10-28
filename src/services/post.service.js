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

  module.exports = {
    createPost,
    getAll,    
  };