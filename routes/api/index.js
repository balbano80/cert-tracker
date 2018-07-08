const router = require("express").Router();
const employeeRoutes = require("./employees");
const adminRoutes = require("./admin");
const employeeCertRoutes = require("./employeeCerts");
const siteCrews = require("./siteCrews");


// Employee routes
router.use("/employee", employeeRoutes);
router.use("/employeecerts", employeeCertRoutes);
router.use("/admin", adminRoutes);
router.use("/crews", siteCrews);

module.exports = router;