const router = require("express").Router();
const employeeController = require("../../controllers/employeeController");

// Matches with "/api/books"
router.route("/")
  .get(employeeController.findAll)
  .post(employeeController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(employeeController.findById)
  // .get(employeeController.findByCrewId) //in progress SKO
  .put(employeeController.update)
  .delete(employeeController.remove);

module.exports = router;