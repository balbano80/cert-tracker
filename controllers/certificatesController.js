const db = require("../models");

// Defining methods for the EmployeeCertsController


module.exports = {

  findAll: function (req, res) {
    console.log("Find All Certs")
    db.Certificate.findAll({})
    .then(function(result) {
      // console.log("Results are: " ,result)
      res.json(result);
    });
  },
  create: function (req, res) {
    db.Certificate.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Certificate.update(
      {name: req.body.name,
      validFor: req.body.validFor},
      {where: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Certificate.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbCerts) {
        res.json(dbCerts);
      })
  }

  // findAll: function(req, res) {
  //   console.log("hit")
  //   db.EmployeeCert.findAll({})
  //   .then(function(result) {
  //     console.log("Results are: " ,result)
  //     res.json(result);
  //   });
  // },
  // findById: function(req, res) {
  //   db.EmployeeCerts.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(dbEmployeeCerts) {
  //       res.json(dbEmployeeCerts);
  //     });
  // },
  // create: function(req, res) {
  //   db.Reminders.create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //    db.Reminders.update(req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     })
  //     .then(function(dbReminders) {
  //       res.json(dbReminders);
  //     });

  // },
  // remove: function(req, res) {
  //   db.Reminders.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(dbReminders) {
  //       res.json(dbReminders);
  //     });
  // }
};