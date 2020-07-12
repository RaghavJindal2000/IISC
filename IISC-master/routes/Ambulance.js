var express = require("express");
var router = express.Router();

var userControllers = require("../controllers/User");
var ambulanceControllers = require("../controllers/Ambulance");

router.post(
  "/registered/:userId",
  userControllers.requireSingin,
  ambulanceControllers.register
);

router.put(
  "/updatepos/:ambId",
  userControllers.requireSingin,
  ambulanceControllers.updatePosition
);

router.get("/getall", ambulanceControllers.getall);

router.param("userId", userControllers.userById);
router.param("ambId", ambulanceControllers.ambulanceById);

module.exports = router;
