const router = require("express").Router();
const userController= require("../../controllers/userController");
// var passport = require("../../config/passport");

// Matches with "/api/books"
router.route("/")
  .post(userController.create);

// Matches with "/api/books/:id"
router
  .route("/:email")
  .get(userController.findByEmail)
  .put(userController.update)
  .delete(userController.remove)

module.exports = router;