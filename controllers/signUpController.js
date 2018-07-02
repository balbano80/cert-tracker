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
    }
  };