const router = require("express").Router();
const certificatesController = require("../../controllers/certificatesController");

// Matches with "/api/getCertificates"
// router.route("/")
  // .get(certificatesController.findExpiryDates)
  // .post(certificatesController.create);

// Matches with "/api/getCertificates/:id"
router
  .route("/:id")
  .get(certificatesController.findExpiryDates)
//   .put(certificatesController.update)
//   .delete(certificatesController.remove);

module.exports = router;