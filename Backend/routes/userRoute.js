const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/", userController.getall);
router.post("/", userController.create);

module.exports = router;
