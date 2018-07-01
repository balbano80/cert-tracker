const router = require("express").Router();
const membersController = require("../../controllers/membersController");

// Matches with "/api/members"
router.route("/members")
  .get(membersController.findAll)
  .post(membersController.create);

// Matches with "/api/members/:id"
router
  .route("/:id")
  .get(membersController.findById)
  .put(membersController.update)

module.exports = router;