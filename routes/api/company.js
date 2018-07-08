const router = require("express").Router();
const companyController= require("../../controllers/companyController");

// Matches with "/api/books"
router.route("/")
  .post(companyController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:")
//   .get(userController.findByEmail)
//   .put(userController.update)
//   .delete(userController.remove)

module.exports = router;