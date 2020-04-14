'use strict';
module.exports = (sequelize, DataTypes) => {
  const ingredient = sequelize.define('ingredient', {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {});
  ingredient.associate = function(models) {
    // associations can be defined here
  };
  return ingredient;
};