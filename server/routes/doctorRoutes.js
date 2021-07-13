const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const doctorController = require('../controller/doctorController');

router.get("/profile", auth, doctorController.getProfile);
router.post("/profile",auth, doctorController.saveProfile);

module.exports = router;