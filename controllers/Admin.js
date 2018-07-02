const db = require("../models");
// const router = require("../routes/signUp.js")

// Defining methods for the signUpController
module.exports = {
    create: function(req, res) {
        console.log("in signUpController block");
      db.Admin
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.Admin.findOne({
        where: {
          id: req.params.id
        }
      })
        .then(function(dbAdmin) {
          res.json(dbAdmin);
        });
    },
    update: function(req, res) {
      db.Admin.update(req.body,
       {
         where: {
           id: req.body.id
         }
       })
       .then(function(dbAdmin) {
         res.json(dbAdmin);
       });
 
   },
   remove: function(req, res) {
     db.Admin.destroy({
       where: {
         id: req.params.id
       }
     })
       .then(function(dbAdmin) {
         res.json(dbAdmin);
       });
   }
  };