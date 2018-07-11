const router = require("express").Router();
const crewcertsController = require("../../controllers/crewcertsController");


// Matches with "/api/crewcerts/:id"
router.route("/:id")
  .get(crewcertsController.findById)


module.exports = router;