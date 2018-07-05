const router = require("express").Router();
const certificateController = require("../../controllers/certificateController");

// Matches with "/api/books"
router.route("/")
  .get(certificateController.findAll)
  .post(certificateController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(certificateController.findById)
  .put(certificateController.update)
  .delete(certificateController.remove);

module.exports = router;