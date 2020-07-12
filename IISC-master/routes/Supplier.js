var express = require("express");
var router = express.Router();

var userControllers = require("../controllers/User");
var supplierControllers = require("../controllers/Supplier");
var medicineControllers = require("../controllers/Medicine");

router.post(
  "/register/:userId",
  userControllers.requireSingin,
  supplierControllers.register
);

router.put(
  "/update/:supId",
  userControllers.requireSingin,
  supplierControllers.toactive
);

router.put(
  "/medicine/:supId/:medId",
  userControllers.requireSingin,
  supplierControllers.medicine
);

router.param("userId", userControllers.userById);
router.param("supId", supplierControllers.supplierById);
router.param("medId", medicineControllers.MedicineById);
module.exports = router;
