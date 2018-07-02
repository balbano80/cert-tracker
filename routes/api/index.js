const router = require("express").Router();
const employeeRoutes = require("./employees");
const adminRoutes = require("./admin");

// Employee routes
router.use("/employee", employeeRoutes);
router.use("/admin", adminRoutes);

module.exports = router;