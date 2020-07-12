var express = require("express");
var router = express.Router();

var userControllers = require("../controllers/User");
var DistributorControllers = require("../controllers/Distributor");
var medicineControllers = require("../controllers/Medicine");

router.post(
  "/register/:userId",
  userControllers.requireSingin,
  DistributorControllers.register
);

router.put(
  "/update/:disId",
  userControllers.requireSingin,
  DistributorControllers.toactive
);

router.put(
  "/medicine/:disId/:medId",
  userControllers.requireSingin,
  DistributorControllers.medicine
);

router.param("userId", userControllers.userById);
router.param("distId", DistributorControllers.DistributorById);
router.param("medId", medicineControllers.MedicineById);
module.exports = router;
