// const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// Matches with "/api/login"
// router.route("/login")
//   .get(loginController.findAll)

// router.route("/login")
//   .post(userController.signIn);

// Matches with "/api/login/:id"
router
  .route("/login/:id")
  .get(loginController.findById)
  .put(loginController.update)

module.exports = router;