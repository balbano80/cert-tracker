const router = require("express").Router();
const siteController = require("../../controllers/siteController");



router.route("/")

  .get(siteController.findAll)
  .post(siteController.create);

module.exports = router;

