const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Reminder.findAll({})
    .then(function(result) {
      res.json(result);
    });
  },
};