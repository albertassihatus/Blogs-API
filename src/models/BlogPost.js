module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      
      title: {
        type: DataTypes.STRING, 
        allowNull:false 
    },
      content: {
        type: DataTypes.STRING, 
        allowNull:false 
    },
      userId: DataTypes.STRING,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    }, 
    {
      timestamps: false,
      underscored: true, 
      tableName: 'blog_posts'
    }
  );

  BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, {
          foreignKey: 'user_id', as: 'users'
      })
    };

    return BlogPost;
  };