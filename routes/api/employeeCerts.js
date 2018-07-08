const router = require("express").Router();
const certificatesController = require("../../controllers/employeeCertsController");

// Matches with "/api/certificates"
router.route("/")
  .get(certificatesController.findAll)
  // .get(certificatesController.findExpiryDates)
  .post(certificatesController.create);

// Matches with "/api/certificates/:id"
router
  .route("/:id")
  .get(certificatesController.findById)
  .put(certificatesController.update)

module.exports = router;