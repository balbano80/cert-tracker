const db = require("../models");

// Defining methods for the EmployeeController


module.exports = {
  findAll: function(req, res) {
    db.Certificate.findAll({})
    .then(function(dbCertificate) {
      res.json(dbCertificate);
      res.json('{message: "hello"}')
    });
  },
  findById: function(req, res) {
    db.Certificate.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbCertificate) {
        res.json(dbCertificate);
      });
  },
  create: function(req, res) {
    db.Certificate.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
     db.Certificate.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbCertificate) {
        res.json(dbCertificate);
      });

  },
  remove: function(req, res) {
    db.Certificate.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbCertificate) {
        res.json(dbCertificate);
      });
  }
};