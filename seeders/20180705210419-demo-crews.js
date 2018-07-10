'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Crews', [
      {
        crew_type: 'Mistras Richmond Ground Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 1
      },
      {
        crew_type: 'Mistras Richmond Rope Access Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 1
      },
      {
        crew_type: 'Mistras Richmond Radiographic Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 1
      },
      {
        crew_type: 'Mistras Richmond CUI Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 1
      },
      {
        crew_type: 'Mistras Valero Ground Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 2
      },
      {
        crew_type: 'Mistras Valero Rope Access Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 2
      },
      {
        crew_type: 'Mistras Valero Radiographic Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 2
      },
      {
        crew_type: 'Mistras Valero CUI Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 2
      },
      {
        crew_type: 'Mistras Shell Ground Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 3
      },
      {
        crew_type: 'Mistras Shell Rope Access Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 3
      },
      {
        crew_type: 'Mistras Shell Radiographic Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 3
      },
      {
        crew_type: 'Mistras Shell CUI Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 3
      },
      {
        crew_type: 'Mistras 66 Ground Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 4
      },
      {
        crew_type: 'Mistras 66 Rope Access Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 4
      },
      {
        crew_type: 'Mistras 66 Radiographic Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 4
      },
      {
        crew_type: 'Mistras 66 CUI Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 4
      },
      // End Mistras
      {
        crew_type: 'QS Richmond Ground Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 5
      },
      {
        crew_type: 'QS Richmond Rope Access Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 5
      },
      {
        crew_type: 'QS Richmond Radiographic Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 5
      },
      {
        crew_type: 'QS Richmond CUI Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 5
      },
      {
        crew_type: 'QS Valero Ground Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 6
      },
      {
        crew_type: 'QS Valero Rope Access Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 6
      },
      {
        crew_type: 'QS Valero Radiographic Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 6
      },
      {
        crew_type: 'QS Valero CUI Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 6
      },
      {
        crew_type: 'QS Shell Ground Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 7
      },
      {
        crew_type: 'QS Shell Rope Access Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 7
      },
      {
        crew_type: 'QS Shell Radiographic Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 7
      },
      {
        crew_type: 'QS Shell CUI Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 7
      },
            {
        crew_type: 'QS Shell Ground Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 8
      },
      {
        crew_type: 'QS 66 Rope Access Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 8
      },
      {
        crew_type: 'QS 66 Radiographic Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 8
      },
      {
        crew_type: 'QS 66 CUI Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 8
      },
      // End QS
      {
        crew_type: 'RS Richmond Ground Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 9
      },
      {
        crew_type: 'RS Richmond Rope Access Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 9
      },
      {
        crew_type: 'RS Richmond Radiographic Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 9
      },
      {
        crew_type: 'RS Richmond CUI Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 9
      },
      {
        crew_type: 'RS Valero Ground Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 10
      },
      {
        crew_type: 'RS Valero Rope Access Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 10
      },
      {
        crew_type: 'RS Valero Radiographic Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 10
      },
      {
        crew_type: 'RS Valero CUI Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 10
      },
      {
        crew_type: 'RS Shell Ground Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 11
      },
      {
        crew_type: 'RS Shell Rope Access Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 11
      },
      {
        crew_type: 'RS Shell Radiographic Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 11
      },
      {
        crew_type: 'RS Shell CUI Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 11
      },
            {
        crew_type: 'RS Shell Ground Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 12
      },
      {
        crew_type: 'RS 66 Rope Access Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 12
      },
      {
        crew_type: 'RS 66 Radiographic Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 12
      },
      {
        crew_type: 'RS 66 CUI Inspection',
        createdAt: new Date(),
        updatedAt: new Date(),
        SiteId: 12
      }
     

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Crews', null, {});
  }
};

