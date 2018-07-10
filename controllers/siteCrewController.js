const db = require("../models");

// Defining methods for the siteCrewController


module.exports = {
  findAll: function(req, res) {
    console.log("hit siteCrews")
    db.Crew.findAll({})
    .then(function(result) {
      res.json(result);
    });
  },
  findBySite: function(req, res) {    // WIP 7/9
    console.log("hit siteCrews")
    db.Crew.findAll({
      where: {
        SiteId: req.params.id
      }
    })
    .then(function(result) {
      res.json(result);
    });
  },
  findById: function(req, res) {
    db.Crews.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbCrew) {
        res.json(dbCrew);
      });
  },
  create: function(req, res) {
    db.Crew.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
     db.Crew.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbCrew) {
        res.json(dbCrew);
      });

  },
  remove: function(req, res) {
    db.Crew.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbCrew) {
        res.json(dbCrew);
      });
  }
};