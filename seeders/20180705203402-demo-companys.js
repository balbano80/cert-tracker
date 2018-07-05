'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Companies', [
      {
        name: 'Mistras',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Qualspec',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'RopeSpec',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Team INC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brand',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alta Vista Solutions',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Companies', null, {});
  }
};
