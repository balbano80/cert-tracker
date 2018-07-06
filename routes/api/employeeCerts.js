const router = require("express").Router();
const employeeCertsController = require("../../controllers/employeeCertsController");

// Matches with "/api/employeecerts"
router.route("/")
  .get(employeeCertsController.findAll)
  .post(employeeCertsController.create);

// Matches with "/api/employeecerts/:id"
router
  .route("/:id")
  .get(employeeCertsController.findById)
  .put(employeeCertsController.update)

module.exports = router;