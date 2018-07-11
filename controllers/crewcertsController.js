const db = require("../models");

// Defining methods for the EmployeeCertsController


module.exports = {


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
  },
 
};