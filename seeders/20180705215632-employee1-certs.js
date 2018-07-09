module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EmployeeCerts', [
      {
        date_obtained: 20180203,
        createdAt: new Date(),
        updatedAt: new Date(),
        CertificateId: 1,
        EmployeeId: 1
      },
      {
        date_obtained: 20180203,
        createdAt: new Date(),
        updatedAt: new Date(),
        CertificateId: 2,
        EmployeeId: 1
      },
      {
        date_obtained: 20180203,
        createdAt: new Date(),
        updatedAt: new Date(),
        CertificateId: 3,
        EmployeeId: 1
      },
      {
        date_obtained: 20180203,
        createdAt: new Date(),
        updatedAt: new Date(),
        CertificateId: 4,
        EmployeeId: 1
      },
      {
        date_obtained: 20180203,
        createdAt: new Date(),
        updatedAt: new Date(),
        CertificateId: 5,
        EmployeeId: 1
      },
      {
        date_obtained: 20180203,
        createdAt: new Date(),
        updatedAt: new Date(),
        CertificateId: 6,
        EmployeeId: 1
      },
      {
        date_obtained: 20180203,
        createdAt: new Date(),
        updatedAt: new Date(),
        CertificateId: 7,
        EmployeeId: 1
      },
      {
        date_obtained: 20180203,
        createdAt: new Date(),
        updatedAt: new Date(),
        CertificateId: 8,
        EmployeeId: 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EmployeeCerts', null, {});
  }
};

