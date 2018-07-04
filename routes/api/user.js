const router = require("express").Router();
const userController= require("../../controllers/User");

// Matches with "/api/books"
router.route("/signup")
  .post(userController.create);

// Matches with "/api/books/:id"
router
  .route("/:email")
  .get(userController.findByEmail)
  .put(userController.update)
  .delete(userController.remove)

module.exports = router;