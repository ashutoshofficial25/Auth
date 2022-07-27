const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authConttoller");
const router = express.Router();

router.get("/", userController.getall);
// router.post("/", userController.create);
router.post("/", authController.signup);

module.exports = router;
