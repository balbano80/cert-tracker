const db = require("../models");
var express = require("express");

// Defining methods for the userController
module.exports = {
    create: function(req, res) {
        console.log("in userController block", req.body);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 3a08dc9675d7969a5235a82e7b3a0c2c51b716ef
      db.User
        .create(req.body)
        // .then(dbModel => res.json(dbModel))
        .then(res.redirect("/login"))
<<<<<<< HEAD
=======
      db.User.create(req.body)
        .then(dbModel => res.json(dbModel))
        .then(res.json("/login"))
>>>>>>> f47a88bd88645be45a729c5bed6cc71bd5f4788c
=======

>>>>>>> 3a08dc9675d7969a5235a82e7b3a0c2c51b716ef
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

  