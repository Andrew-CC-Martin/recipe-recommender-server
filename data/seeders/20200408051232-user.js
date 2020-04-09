'use strict';

module.exports = {
  up: (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      email: 'blah2@ahhhhh.bleh',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    // todo - do I need this?
    return queryInterface.bulkDelete('users', null, {});
  }
};
