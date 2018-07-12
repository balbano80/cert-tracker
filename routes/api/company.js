const router = require("express").Router();
const companyController= require("../../controllers/companyController");

// Matches with "/api/books"
router.route("/")
  .post(companyController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
    .get(companyController.findById);
//   .put(userController.update)
//   .delete(userController.remove)

module.exports = router;