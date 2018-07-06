const router = require("express").Router();
const employeeRoutes = require("./employees");
const userRoutes = require("./user");
const companyRoutes = require("./company");

// Employee routes
router.use("/employee", employeeRoutes);
router.use("/user", userRoutes);
router.use("/company", companyRoutes);

module.exports = router;