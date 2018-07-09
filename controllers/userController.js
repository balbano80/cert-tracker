const db = require("../models");
var passport = require("../config/passport");

// Defining methods for the userController
module.exports = {
    create: function(req, res) {
        console.log("in userController block", req.body);
      db.User
        .create(req.body)
        // .then(dbModel => res.json(dbModel))
        .then(res.redirect("/login"))
        .catch(err => res.status(422).json(err));
    },
    findByEmail: function(req, res) {
      db.User.findOne({
        where: {
          email: req.params.email
        }
      })
        .then(function(dbUser) {
          res.json(dbUser);
        });
    },
    signIn: function(req, res) {
      console.log("in userController block", req.body);
      db.User.findOne({
        where: {
          email: req.body.email
        }
      })
      .then(function(data){
        console.log(data);
      });
    },
    update: function(req, res) {
      db.User.update(req.body,
       {
         where: {
           id: req.body.id
         }
       })
       .then(function(dbUser) {
         res.json(dbUser);
       });
 
   },
   remove: function(req, res) {
     db.User.destroy({
       where: {
         id: req.params.id
       }
     })
       .then(function(dbUser) {
         res.json(dbUser);
       });
   }
  };

  