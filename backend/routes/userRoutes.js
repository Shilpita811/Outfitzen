const express = require("express");
const { registerUser, loginUser, logout, getUserProfile } = require("../controllers/usercontrollers");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/profile").get( isAuthenticatedUser, getUserProfile);

module.exports = router