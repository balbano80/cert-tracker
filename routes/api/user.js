const router = require("express").Router();
const userController= require("../../controllers/userController");

// Matches with "/api/books"
router.route("/")
  .post(userController.create);

router.route("/login")
  .post(userController.signIn);

// Matches with "/api/books/:id"
router
  .route("/:email")
  .get(userController.findByEmail)
  .put(userController.update)
  .delete(userController.remove)

module.exports = router;