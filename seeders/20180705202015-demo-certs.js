'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Certificates', [
      {
        name: 'OSCA - 3M 6200 Half Face',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OSCA - Audiogram',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OSCA - CXV Richmond RI SWP 1',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OSCA - CXV Richmond RI SWP 2',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OSCA - NCRSO Test Only',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OSCA - Pulmonary Function Test',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OSCA - Respiratory clearance test',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OSCA - Valero Benicia Refinery Site Specific',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OSHA - Confined Spaces',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OSHA - Hearing Conservation',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OSHA - Fire Safety',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OSHA - Basic Respiratory Protection',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OSHA - Emergency Response',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OSHA - Cold Stress',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OSHA - Heat Stress',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Peer Checking and Lessons Learned 2018',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Peer Checking and Lessons Learned 2017',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Computed Radiography',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Radiation Safety',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Radiation Safety Part 1',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Radiation Safety Part 2',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Radiation Safety Operating & Procedures Manual',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Quality Assurance Indoctrination',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MT Limited to Stationary Units - Part 1',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MT Yoke',
        valid_for: '365',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OSHA - Lock and Tag',
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
