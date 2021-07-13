const express = require('express');
const router = express.Router();
const Patient = require('../models/patientAuth');
const Doctor = require('../models/docAuth');
const authController = require('../controller/authController');

// const auth = require('../middleware/auth');

router.post('/patientSignup', authController.handlePatientSignup);
router.post('/patientLogin', authController.handlePatientLogin);
router.post('/docSignup', authController.handleDocSignup);
router.post('/docLogin', authController.handleDocLogin);


module.exports = router;