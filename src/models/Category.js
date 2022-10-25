module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, 
    {
      timestamps: false,
      underscored: true, 
      tableName: 'categories'
    },
    );
  
    return Category;
  };