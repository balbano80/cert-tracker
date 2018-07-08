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
        crew_type: 'Rope Access Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 1
      },
      {
        crew_type: 'Radiographic Inspection',
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
        crew_type: 'Rope Access Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 2
      },
      {
        crew_type: 'Radiographic Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 2
      },
      {
        crew_type: 'Ground Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 3
      },
      {
        crew_type: 'Rope Access Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 3
      },
      {
        crew_type: 'Radiographic Inspection',
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

