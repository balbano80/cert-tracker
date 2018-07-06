const db = require("../models");

// Defining methods for the SiteController


module.exports = {
  findAll: function(req, res) {
    db.Site.findAll({})
    .then(function(dbSite) {
      // console.log("testing")
      res.json(dbSite);
      res.json('{message: "hello"}')
    });
  },
  // findById: function(req, res) {
  //   db.Site.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(dbSite) {
  //       res.json(dbSite);
  //     });
  // },
  create: function(req, res) {
    db.Site.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // update: function(req, res) {
  //    db.Site.update(req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     })
  //     .then(function(dbSite) {
  //       res.json(dbSite);
  //     });

  // },
  // remove: function(req, res) {
  //   db.Site.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(dbSite) {
  //       res.json(dbSite);
  //     });
  // }
};