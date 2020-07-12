var express = require("express");
var router = express.Router();

var userControllers = require("../controllers/User");

router.post("/signup", userControllers.signup);
router.post("/signin", userControllers.signin);

module.exports = router;
