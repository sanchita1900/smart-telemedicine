const Patient = require("../models/patientAuth");
const Doctor = require("../models/docAuth");
const Relation = require("../models/relation");
const mongoose = require("mongoose");

exports.getProfile = async (req, res) => {
  // const id = req.params.userId;
  try {
    const profile = await Doctor.findById({ _id: req.decodedToken.userId });
    console.log(profile);
    delete profile.password;
    delete profile._id;
    res.status(200).json({ message: "success", profile: profile });
  } catch (err) {
    console.log(err);
  }
};

exports.saveProfile = async (req, res, next) => {
  const {
    name,
    email,
    state,
    city,
    gender,
    age,
    contact,
    university,
    specialization,
    honors,
    yearOfExp,
    about,
  } = req.body;
  try {
    const doctor = await Doctor.findById({ _id: req.decodedToken.userId });
    doctor.name = name;
    doctor.email = email;
    doctor.city = city;
    doctor.state = state;
    doctor.gender = gender;
    doctor.age = age;
    doctor.contact = contact;
    doctor.university = university;
    doctor.specialization = specialization;
    doctor.honors = honors;
    doctor.yearOfExp = yearOfExp;
    doctor.about = about;
    const result = await doctor.save();
    res.status(200).json({ message: "success", profile: result });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.checkInvitation = async (req, res, next) => {
  const id = req.decodedToken.userId;
  try {
    const doctor = await Doctor.findById(id).populate("invitation");
    let inviteArr = doctor.invitation;

    let arr = [];
    for (let i = 0; i < inviteArr.length; i++) {
      const patient = await Patient.findById(inviteArr[i]);
      arr.push(patient);
    }
    console.log(arr);
    res.status(200).json({ message: "success", arr: arr });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.confirmInvitation = async (req, res, next) => {
  try {
    const docId = req.decodedToken.userId;
    const patId = req.params.id;
    console.log(req.params.id);
    const doctor = await Doctor.findById(docId);
    const patient = await Patient.findById(patId);
    if (
      doctor.appointment.find((x) => x.toString() === patId) &&
      patient.appointedDocs.find((x) => x.toString() === docId)
    ) {
      return res.status(400).json({ message: "already appointed" });
    } else {
      doctor.appointment.push(mongoose.Types.ObjectId(patId));
      doctor.invitation = doctor.invitation.filter(
        (p) => p.toString() !== patId
      );
      await doctor.save();
      patient.appointedDocs.push(mongoose.Types.ObjectId(docId));
      await patient.save();
      console.log(patient);
      return res.status(200).json({ message: "success" });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getPatients = async (req, res, next) => {
  try {
    const docId = req.decodedToken.userId;
    const arr = [];
    const doctor = await Doctor.findById(docId);
    const patientsArr = doctor.appointment;
    for (let i = 0; i < patientsArr.length; i++) {
      const patient = await Patient.findById(patientsArr[i]);
      arr.push(patient);
    }
    console.log(arr);
    res.status(200).json({ message: "success", arr: arr });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.sendPrescription = async (req, res, next) => {
  try {
    const patId = req.body.userId;
    const docId = req.decodedToken.userId;
    const relation = await Relation.create({
      patientId: mongoose.Types.ObjectId(patId),
      doctorId: mongoose.Types.ObjectId(docId),
      message: req.body.message,
      sender: "doctor",
    });
    res.status(200).json({ message: "success", relation: relation });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.checkRequest = async (req, res, next) => {
  const id = req.decodedToken.id;
  try {
    const doctor = await Doctor.findById(id);
    let videoArr = doctor.videoRequest;
    console.log(videoArr);
    var arr = [];
    for (let i = 0; i < videoArr.length; i++) {
      const patient = await Patient.findById(videoArr[i].patientId);
      const obj = {
        patient: patient,
        date: videoArr[i].date,
      };
      arr.push(obj);
    }
    console.log(arr);
    res.status(200).json({ message: "success", arr: arr });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
