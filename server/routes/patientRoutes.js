const express = require('express');
const router = express.Router();

const auth = require('../middleware/patientAuth');
const patientController = require('../controller/patientController');

router.get("/profile", auth, patientController.getProfile);
router.post("/profile",auth, patientController.saveProfile);
router.get("/getDoctors",auth, patientController.getDoctors);
router.post("/sendRequest/:id",auth,patientController.sendRequest);
router.post("/cancelRequest/:id",auth,patientController.cancelRequest);
router.get("/getAppointedDoctors",auth,patientController.getAppointedDoctors);
module.exports = router;