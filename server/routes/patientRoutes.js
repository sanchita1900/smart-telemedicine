const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const patientController = require('../controller/patientController');

router.get("/profile", auth, patientController.getProfile);
router.post("/profile",auth, patientController.saveProfile);

module.exports = router;