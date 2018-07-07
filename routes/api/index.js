const router = require("express").Router();
const employeeRoutes = require("./employees");
const adminRoutes = require("./admin");
const siteRoutes = require("./site");
// Employee routes
router.use("/employee", employeeRoutes);
router.use("/admin", adminRoutes);
router.use("/site", siteRoutes);

module.exports = router;