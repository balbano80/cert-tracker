const router = require("express").Router();
const siteCrewController = require("../../controllers/siteCrewController");

// Matches with "/api/crews"
router.route("/")
  .get(siteCrewController.findAll)
  .post(siteCrewController.create);

// Matches with "/api/crews/:id"
router
  .route("/:id")
  .get(siteCrewController.findBySite) //WIP 7/9
  .get(siteCrewController.findById)
  .put(siteCrewController.update)

module.exports = router;