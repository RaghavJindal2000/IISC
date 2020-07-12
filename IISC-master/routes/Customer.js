var express = require("express");
var router = express.Router();

var userControllers = require("../controllers/User");
var customerControllers = require("../controllers/Customer");
var medicineControllers = require("../controllers/Medicine");

router.post(
  "/setup/:userId",
  userControllers.requireSingin,
  customerControllers.setupCutsomer
);

router.put(
  "/update/:cusId",
  userControllers.requireSingin,
  customerControllers.updateCustomer
);

router.get("/medicine", medicineControllers.allMedicine);

router.get("/getall", customerControllers.getall);
router.get("/getactive", customerControllers.getactive);

router.put("/toactive/:cusId", customerControllers.toactive);

router.param("userId", userControllers.userById);
router.param("cusId", customerControllers.customerById);
module.exports = router;
