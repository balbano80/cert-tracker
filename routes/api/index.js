const router = require("express").Router();
const employeeRoutes = require("./employees");
const adminRoutes = require("./admin");
const siteRoutes = require("./site");
const employeeCertRoutes = require("./employeeCerts");


// Employee routes
router.use("/employee", employeeRoutes);
router.use("/employeecerts", employeeCertRoutes);
router.use("/admin", adminRoutes);
router.use("/site", siteRoutes);

module.exports = router;