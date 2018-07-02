const router = require("express").Router();
const signUpController= require("../../controllers/signUpController.js");

// Matches with "/api/books"
router.route("/api/signup")
  .post(signUpController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(signUpController.findById)
  .put(signUpController.update)
  .delete(signUpController.remove)

module.exports = router;