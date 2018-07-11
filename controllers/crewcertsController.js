const db = require("../models");

// Defining methods for the EmployeeCertsController


module.exports = {
  findAll: function(req, res) {
    db.CrewCert.findAll({})
    .then(function(dbCrewCert) {
      res.json(dbCrewCert);
    });
  },
  findById: function(req, res) {
    db.CrewCert.findAll({
      where: {
        CrewId: req.params.id
      }
    })
      .then(function(crewCerts) {
        res.json(crewCerts);
      });
  },
  create: function (req, res) {
    db.CrewCert.create(req.body)
      .then(dbCrewCert => res.json(dbCrewCert))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.CrewCert.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbCrewCerts) {
        res.json(dbCrewCerts);
      })
  }
 
};