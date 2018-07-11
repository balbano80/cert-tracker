const db = require("../models");

// Defining methods for the EmployeeCertsController


module.exports = {
  findAll: function(req, res) {
    db.CrewCert.findAll({})
    .then(function(dbCrewCert) {
      res.json(dbCrewCert);
    });
  },
  findById: function(req, res) {
    // console.log("in cert controller file checking for crew with id: ", req.params.id)
    db.CrewCert.findAll({
      where: {
        CrewId: req.params.id
      }
    })
      .then(function(crewCerts) {
        // console.log("Return from crewCerts database", crewCerts)
        res.json(crewCerts);
      });
  }
 
};