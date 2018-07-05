'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Crews', [
      {
        crew_type: 'Ground Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 1
      },
      {
        name: 'Rope Access Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 1
      },
      {
        name: 'Radiographic Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 1
      },
      {
        crew_type: 'Ground Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 2
      },
      {
        name: 'Rope Access Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 2
      },
      {
        name: 'Radiographic Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 2
      },
      {
        name: 'Rope Access Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 1
      },
      {
        name: 'Radiographic Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 1
      },
      {
        crew_type: 'Ground Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 3
      },
      {
        name: 'Rope Access Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 3
      },
      {
        name: 'Radiographic Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 3
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Crews', null, {});
  }
};

