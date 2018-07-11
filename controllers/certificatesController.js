const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Certificate.findAll({})
    .then(function(result) {
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
  },

  findById: function(req, res) {
    // console.log("in cert controller file checking for crew with id: ", req.params.id)
    db.Crew.findAll({
      where: {
        id: req.params.id
      },
        include: [{
          model: db.Certificate
      }]
    })
      .then(function(crewCerts) {
        // console.log("Return from crewCerts database", crewCerts)
        res.json(crewCerts);
      });
  },
};