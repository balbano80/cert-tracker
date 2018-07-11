const router = require("express").Router();
const remindersController = require("../../controllers/remindersController");


router.route("/")

  .get(remindersController.findAll)
  // .post(reminderController.create)

module.exports = router;