const express = require('express');
const router = express.Router();

const auth = require('../middleware/doctorAuth');
const doctorController = require('../controller/doctorController');

router.get("/profile", auth, doctorController.getProfile);
router.post("/profile",auth, doctorController.saveProfile);
router.get("/checkInvitation",auth, doctorController.checkInvitation);
router.post("/confirmInvitation/:id",auth,doctorController.confirmInvitation);
router.get("/getPatients",auth,doctorController.getPatients);
router.post("/sendPrescription/:id",auth,doctorController.sendPrescription);

module.exports = router;