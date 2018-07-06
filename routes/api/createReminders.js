const router = require("express").Router();
const remindersController = require("../../controllers/remindersController");

// Matches with "/api/employee"
router.route("/employee")
  .get(remindersController.findAll)
  .post(remindersController.create);

// Matches with "/api/employee/:id"
router
  .route("/:id")
  .get(remindersController.findById)
  .put(remindersController.update)

module.exports = router;