const router = require("express").Router();
const certificatesController = require("../../controllers/certificatesController");

// Matches with "/api/getCertificates"
router.route("/")
  .get(certificatesController.findAll)
  .post(certificatesController.create)

// Matches with "/api/getCertificates/:id"
router
  .route("/:id")
  .put(certificatesController.update)
  .get(certificatesController.findById)
//   .get(certificatesController.findExpiryDates)
//   .delete(certificatesController.remove);

module.exports = router;