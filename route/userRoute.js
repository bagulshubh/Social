const express = require("express");
const router = express.Router();

const {getUser, updateUser} = require("../controller/UserController");
const {auth}  = require("../middleware/authMiddleware");

router.get("/getUser", auth, getUser);
router.post("/update", auth, updateUser);

module.exports = router;
