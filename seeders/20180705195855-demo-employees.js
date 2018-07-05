'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Employees', [
      {
        first_name: 'Bill',
        last_name: 'Hoff',
        email: 'er@er.co',
        phone_number: '123456789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Mike',
        last_name: 'Whyte',
        email: 'mike@home.com',
        phone_number: '5107783922',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Justin',
        last_name: 'Burt',
        email: 'justin@demo.com',
        phone_number: '5101233900',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Ariel',
        last_name: 'McBean',
        email: 'ariel@demo.com',
        phone_number: '5107783123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Dan',
        last_name: 'Ghiringhelli',
        email: 'dan@demo.com',
        phone_number: '5457783123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Phill',
        last_name: 'Tearse',
        email: 'phill@demo.com',
        phone_number: '5457783123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Raymond',
        last_name: 'Matinez',
        email: 'raymond@demo.com',
        phone_number: '5107783124',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Cheyenne',
        last_name: 'Sukalski',
        email: 'raymond@demo.com',
        phone_number: '5107783125',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Employees', null, {});
  }
};
