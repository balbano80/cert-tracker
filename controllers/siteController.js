const db = require("../models");

// Defining methods for the SiteController


module.exports = {
  findAll: function(req, res) {
    db.Site.findAll({})
    .then(function(results) {
      res.json(results);
    });
  },
  create: function(req, res) {
    db.Site.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};