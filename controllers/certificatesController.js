const db = require("../models");

// Defining methods for the EmployeeCertsController


module.exports = {

  findExpiryDates: function(req, res) {
    console.log("Find Expiry Dates")
    db.Certificate.findAll({
      // where id: id parameter thats passed in
    })
    .then(function(result) {
      console.log("Results are: " ,result)
      console.log("SHIT WORKS");
      res.json(result);
    });
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