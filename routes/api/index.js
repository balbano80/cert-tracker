const router = require("express").Router();
const employeeRoutes = require("./employees");
const adminRoutes = require("./admin");
const siteRoutes = require("./site");
const employeeCertRoutes = require("./employeeCerts");
const certificatesRoutes = require("./certificates");
const userRoutes = require("./user");
// const loginRoutes = require("./login");
const companyRoutes = require("./company");


// Employee routes
router.use("/employee", employeeRoutes);
router.use("/admin", adminRoutes);
router.use("/site", siteRoutes);
router.use("/employeecerts", employeeCertRoutes);
router.use("/certificates", certificatesRoutes);
router.use("/user", userRoutes);
// router.use("/login", loginRoutes);
router.use("/company", companyRoutes);



module.exports = router;