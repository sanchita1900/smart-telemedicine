const Patient = require("../models/patientAuth");
const Doctor = require("../models/docAuth");
const Relation = require("../models/relation");
const Problem = require("../models/problem");
const { response } = require("express");
const mongoose = require("mongoose");

exports.getProfile = async (req, res) => {
  // const id = req.params.userId;
  try {
    const profile = await Patient.findById({ _id: req.decodedToken.userId });
    console.log(profile);
    delete profile.password;
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
    weight,
    height,
    about,
    disease,
    medicine,
  } = req.body;
  try {
    const patient = await Patient.findById({ _id: req.decodedToken.userId });
    patient.name = name;
    patient.email = email;
    patient.city = city;
    patient.state = state;
    patient.gender = gender;
    patient.age = parseInt(age);
    patient.contact = parseInt(contact);
    patient.weight = parseInt(weight);
    patient.height = parseInt(height);
    patient.disease = disease;
    patient.medicine = medicine;
    patient.about = about;
    const result = await patient.save();
    res.status(200).json({ message: "success", profile: result });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getDoctors = async (req, res, next) => {
  const id = req.decodedToken.userId;
  try {
    // const patient = Patient.findById({_id:id});
    // const docInRel = await Relation.find({ patientId: id })
    const doctors = await Doctor.find();
    // const reqDoc = patient.request;
    // const relDoc = docInRel.map(e => e.doctorId.toString());
    // const filterDoc = doctors.filter(el => !fdoc.includes(el._id.toString()));
    res.status(200).json({ message: "success", doctors: doctors });
  } catch (err) {
    next(err);
  }
};

exports.sendRequest = async (req, res, next) => {
  try {
    const docId = req.params.id;
    console.log(req.params.id);
    const patientId = req.decodedToken.userId;
    const doctor = await Doctor.findById(docId);
    console.log(doctor);
    const patient = await Patient.findById(patientId);
    if (
      patient.request.find((x) => x.toString() === docId) ||
      doctor.invitation.find((x) => x.toString() === patientId)
    ) {
      return res.status(400).json({ message: "request already sent" });
    } else {
      patient.request.push(mongoose.Types.ObjectId(docId));
      await patient.save();
      doctor.invitation.push(mongoose.Types.ObjectId(patientId));
      console.log("hello", doctor.invitation);
      await doctor.save();
      return res.status(200).json({ message: "success" });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.cancelRequest = async (req, res, next) => {
  try {
    const docId = req.params.id;
    console.log(req.params.id);
    const patientId = req.decodedToken.userId;
    const doctor = await Doctor.findById(docId);
    const patient = await Patient.findById(patientId);
    console.log(patient);
    if (
      (patient.request.find((x) => x.toString() === docId) &&
        doctor.invitation.find((x) => x.toString() == patientId)) ||
      (patient.appointedDocs.find((x) => x.toString() === docId) &&
        doctor.appointment.find((x) => x.toString() === patientId))
    ) {
      patient.request = patient.request.filter((p) => p.toString() !== docId);
      patient.appointedDocs = patient.appointedDocs.filter(
        (p) => p.toString() !== docId
      );
      await patient.save();
      doctor.invitation = doctor.invitation.filter(
        (p) => p.toString() !== patId
      );
      doctor.appointment = doctor.invitation.filter(
        (p) => p.toString() !== patId
      );
      await doctor.save();
      console.log(patient.request);
      return res.status(200).json({ message: "success" });
    } else {
      return res.status(400).json({ message: "doctor not requested already" });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getAppointedDoctors = async (req, res, next) => {
  try {
    const patId = req.decodedToken.userId;
    const arr = [];
    const patient = await Patient.findById(patId);
    const doctorsArr = patient.appointedDocs;
    for (let i = 0; i < doctorsArr.length; i++) {
      const doctor = await Doctor.findById(doctorsArr[i]);
      arr.push(doctor);
    }
    console.log(arr);
    res.status(200).json({ message: "success", arr: arr });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.sendProblem = async (req, res, next) => {
  try {
    const docId = req.body.userId;
    const patId = req.decodedToken.userId;
    console.log(patId);
    const relation = await Relation.create({
      patientId: mongoose.Types.ObjectId(patId),
      doctorId: mongoose.Types.ObjectId(docId),
      message: req.body.message,
      sender: "patient",
    });
    console.log(relation);
    res.status(200).json({ message: "success", relation: relation });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.sendVideoRequest = async (req, res, next) => {
  const docId = req.params.id;
  const patId = req.decodedToken.userId;
  try {
    const doctor = await Doctor.findById(docId);
    const date = new Date();
    const obj = {
      patientId: patId,
      date: date.toDateString(),
    };
    doctor.videoRequest.push(obj);
    await doctor.save();
    res.status(200).json({ message: "success" });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
