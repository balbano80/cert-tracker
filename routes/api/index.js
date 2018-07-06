const router = require("express").Router();
const employeeRoutes = require("./employees");
const adminRoutes = require("./admin");
const employeeCertRoutes = require("./employeeCerts");


// Employee routes
router.use("/employee", employeeRoutes);
router.use("/employeecerts", employeeCertRoutes);
router.use("/admin", adminRoutes);

module.exports = router;