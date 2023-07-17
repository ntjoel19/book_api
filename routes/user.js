const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");

const userCtrl = require("../controllers/user");
const passwordCheck = require("../middlewares/password");

router.post("/signup", passwordCheck, userCtrl.signup);
router.post("/signin", userCtrl.signin);

module.exports = router;