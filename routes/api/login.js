const router = require("express").Router();
var passport = require("../config/passport");
const loginController = require("../../controllers/loginController");

// Matches with "/api/login"
router.route("/login")
  .post(loginController.signIn);

// Matches with "/api/login/:id"
router
  .route("/login/:id")
  .get(loginController.findById)
  .put(loginController.update)

module.exports = router;
