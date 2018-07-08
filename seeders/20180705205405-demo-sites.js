'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sites', [
      {
        name: 'Chevron Richmond CA',
        createdAt: new Date(),
        updatedAt: new Date(),
        CompanyId: 1
      },
      {
        name: 'Valero Benicia CA',
        createdAt: new Date(),
        updatedAt: new Date(),
        CompanyId: 1
      },
      {
        name: 'Shell Martinez Refinery CA',
        createdAt: new Date(),
        updatedAt: new Date(),
        CompanyId: 1
      },
      {
        name: 'Phillips 66 Refinery CA',
        createdAt: new Date(),
        updatedAt: new Date(),
        CompanyId: 1
      },
      {
        name: 'Chevron Richmond CA',
        createdAt: new Date(),
        updatedAt: new Date(),
        CompanyId: 2
      },
      {
        name: 'Valero Benicia CA',
        createdAt: new Date(),
        updatedAt: new Date(),
        CompanyId: 2
      },
      {
        name: 'Shell Martinez Refinery CA',
        createdAt: new Date(),
        updatedAt: new Date(),
        CompanyId: 2
      },
      {
        name: 'Phillips 66 Refinery CA',
        createdAt: new Date(),
        updatedAt: new Date(),
        CompanyId: 2
      },
      {
        name: 'Chevron Richmond CA',
        createdAt: new Date(),
        updatedAt: new Date(),
        CompanyId: 3
      },
      {
        name: 'Valero Benicia CA',
        createdAt: new Date(),
        updatedAt: new Date(),
        CompanyId: 3
      },
      {
        name: 'Shell Martinez Refinery CA',
        createdAt: new Date(),
        updatedAt: new Date(),
        CompanyId: 3
      },
      {
        name: 'Phillips 66 Refinery CA',
        createdAt: new Date(),
        updatedAt: new Date(),
        CompanyId: 3
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sites', null, {});
  }
};
