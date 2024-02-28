'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Books.init({
    name: {
      type: DataTypes.STRING,
      required: true
    },
    author: {
      type: DataTypes.STRING,
      required: true
    },
    publisher: {
      type: DataTypes.STRING,
      required: true
    },
    description: {
      type: DataTypes.STRING,
      required: true
    },
    pages: {
      type: DataTypes.INTEGER,
      required: true
    },
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};