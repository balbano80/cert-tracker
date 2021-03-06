const router = require("express").Router();
const employeeRoutes = require("./employees");
const siteRoutes = require("./site");
const employeeCertRoutes = require("./employeeCerts");
const siteCrews = require("./siteCrews");
const certificatesRoutes = require("./certificates");
const userRoutes = require("./user");
const crewcertsRoutes = require("./crewcertsRoutes");
// const loginRoutes = require("./login");
const companyRoutes = require("./company");
const reminderRoutes = require("./reminders")


// Employee routes
router.use("/employee", employeeRoutes);
router.use("/crews", siteCrews);
router.use("/site", siteRoutes);
router.use("/employeecerts", employeeCertRoutes);
router.use("/certificates", certificatesRoutes);
router.use("/certification", companyRoutes);
router.use("/crewcerts", crewcertsRoutes);      
router.use("/user", userRoutes);
// router.use("/login", loginRoutes);
router.use("/company", companyRoutes);
router.use("/reminders", reminderRoutes);


module.exports = router;