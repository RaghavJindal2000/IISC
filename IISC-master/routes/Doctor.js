var express = require("express");
var router = express.Router();

var userControllers = require("../controllers/User");
var doctorControllers = require("../controllers/Doctor");

router.post(
  "/register/:userId",
  userControllers.requireSingin,
  doctorControllers.register
);

router.put(
  "/update/:docId",
  userControllers.requireSingin,
  doctorControllers.toactive
);

router.get("/getall", doctorControllers.getall);

router.param("userId", userControllers.userById);
router.param("docId", doctorControllers.DoctorById);
module.exports = router;
