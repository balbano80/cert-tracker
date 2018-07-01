const db = require("../models");

// Defining methods for the signUpController
module.exports = {
    create: function(req, res) {
        console.log(req.body);
      db.Admin
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };