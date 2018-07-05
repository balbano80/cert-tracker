'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Crews', [
      {
        name: 'Chevron Richmond CA',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 1
      },
      {
        name: 'Valero Benicia CA',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 1
      },
      {
        name: 'Shell Martinez Refinery CA',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 1
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Crews', null, {});
  }
};
