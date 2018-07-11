
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reminders', [
      {
        employee_id: 2,
        cert_id: 1,
        date_expiration: 20190303,
        createdAt: new Date(),
        updatedAt: new Date(),
        CertificateId: 1,
      },
      {
        employee_id: 2,
        cert_id: 1, 
        date_expiration: 20190303,
        createdAt: new Date(),
        updatedAt: new Date(),
        CertificateId: 2,
      },
      {
        employee_id: 2,
        cert_id: 1,
        date_expiration: 20190303,
        createdAt: new Date(),
        updatedAt: new Date(),
        CertificateId: 3,
      },
      {
        employee_id: 2,
        cert_id: 1,
        date_expiration: 20190303,
        createdAt: new Date(),
        updatedAt: new Date(),
        CertificateId: 4,
      },
      {
        employee_id: 2,
        cert_id: 1,
        date_expiration: 20190303,
        createdAt: new Date(),
        updatedAt: new Date(),
        CertificateId: 5,
        employee_id: 1
      },
      {
        employee_id: 2,
        cert_id: 1,
        date_expiration: 20190303,
        createdAt: new Date(),
        updatedAt: new Date(),
        CertificateId: 6,
      },
      {
        employee_id: 2,
        cert_id: 1,
        date_expiration: 20190303,
        createdAt: new Date(),
        updatedAt: new Date(),
        CertificateId: 7,
      },
      {
        employee_id: 2,
        cert_id: 1,
        date_expiration: 20190303,
        createdAt: new Date(),
        updatedAt: new Date(),
        CertificateId: 8,
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reminders', null, {});
  }
};
