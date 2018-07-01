const router = require("express").Router();
const employeeRoutes = require("./employees");

// Employee routes
router.use("/employee", employeeRoutes);

module.exports = router;