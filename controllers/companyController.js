const db = require("../models");

// Defining methods for the userController
module.exports = {
    create: function(req, res) {
        console.log("in companyController block", req.body);
      db.Company
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByName: function(req, res) {
      db.Company.findOne({
        where: {
          email: req.params.name
        }
      })
        .then(function(dbCompany) {
          res.json(dbCompany);
        });
    },
    update: function(req, res) {
      db.Company.update(req.body,
       {
         where: {
           id: req.body.name
         }
       })
       .then(function(dbCompany) {
         res.json(dbCompany);
       });
 
   },
   remove: function(req, res) {
     db.Company.destroy({
       where: {
         id: req.params.name
       }
     })
       .then(function(dbCompany) {
         res.json(dbCompany);
       });
   }
  };