'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Certificates', [
      {
        name: '3M 6200 Half Face',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Audiogram',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CXV Richmond RI SWP 1',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CXV Richmond RI SWP 2',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'NCRSO Test Only',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pulmonary Function Test',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Respiratory clearance test',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Valero Benicia Refinery Site Specific',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Certificates', null, {});
  }
};
