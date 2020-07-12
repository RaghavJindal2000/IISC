var express = require("express");
var router = express.Router();

var userControllers = require("../controllers/User");
var hospitalControllers = require("../controllers/Hospital");

router.post(
  "/register/:userId",
  userControllers.requireSingin,
  hospitalControllers.register
);

router.put(
  "/update/:hosId",
  userControllers.requireSingin,
  hospitalControllers.toactive
);

router.get("/getall", hospitalControllers.getall);

router.param("userId", userControllers.userById);
router.param("hosId", hospitalControllers.HospitalById);
module.exports = router;
