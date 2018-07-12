const db = require("../models");

// Defining methods for the userController
module.exports = {
    create: function(req, res) {
        // console.log("in companyController block", req.body);
      db.Company
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    //altering for certificates
    findById: function(req, res) {
      db.Certificate.findOne({
        where: {
          id: req.params.id
        }
      })
        .then(function(dbCertificate) {
          res.json(dbCertificate);
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