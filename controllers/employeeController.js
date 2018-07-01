const db = require("../models");

// Defining methods for the EmployeeController


module.exports = {
  findAll: function(req, res) {
    db.Employee.findAll({})
    .then(function(dbEmployee) {
      res.json(dbEmployee);
      res.json('{message: "hello"}')
    });
  },
  findById: function(req, res) {
    db.Employee.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbEmployee) {
        res.json(dbEmployee);
      });
  },
  create: function(req, res) {
    db.Employee.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
     db.Employee.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbEmployee) {
        res.json(dbEmployee);
      });

  },
  remove: function(req, res) {
    db.Employee.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbEmployee) {
        res.json(dbEmployee);
      });
  }
};