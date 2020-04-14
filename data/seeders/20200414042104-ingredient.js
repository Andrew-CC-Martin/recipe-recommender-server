'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ingredients', [
      {
        name: 'sliced white bread',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'unsalted butter',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'vegemite',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ingredients', null, {});
  }
};
