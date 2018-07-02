const router = require("express").Router();
const adminController= require("../../controllers/Admin");

// Matches with "/api/books"
router.route("/signup")
  .post(adminController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(adminController.findById)
  .put(adminController.update)
  .delete(adminController.remove)

module.exports = router;