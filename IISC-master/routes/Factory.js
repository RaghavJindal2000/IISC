var express = require("express");
var router = express.Router();

var userControllers = require("../controllers/User");
var factoryControllers = require("../controllers/Factory");

router.post(
  "/register/:userId",
  userControllers.requireSingin,
  factoryControllers.register
);

router.put(
  "/update/:factId",
  userControllers.requireSingin,
  factoryControllers.toactive
);

router.post("/medicine/:factId", factoryControllers.medicine);

router.param("userId", userControllers.userById);
router.param("factId", factoryControllers.FactoryById);
module.exports = router;
