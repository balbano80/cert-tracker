const router = require("express").Router();
const employeeRoutes = require("./employees");
const adminRoutes = require("./admin");
const employeeCertRoutes = require("./employeeCerts");
const certificatesRoutes = require("./certificates");
const userRoutes = require("./user");
const companyRoutes = require("./company");


// Employee routes
router.use("/employee", employeeRoutes);
router.use("/employeecerts", employeeCertRoutes);
router.use("/certificates", certificatesRoutes);
router.use("/admin", adminRoutes);
router.use("/user", userRoutes);
router.use("/company", companyRoutes);



module.exports = router;