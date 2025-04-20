const express = require("express");
const router = express.Router();

const {getUser} = require("../controller/User");
const {auth}  = require("../middleware/authMiddleware");

router.post("/getProfile", auth, getUser);

module.exports = router;
