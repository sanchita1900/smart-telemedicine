const Patient = require("../models/patientAuth");
const Doctor = require("../models/docAuth");
const Prescription = require("../models/prescription");
const Problem = require("../models/problem");
const Relation = require("../models/relation");

exports.listMessages = async (req, res, next) => {
  if (!req.query.id) {
    res.status(404).json({ message: "error" });
    return;
  }
  const relation = await Relation.find({
    patientId:
      req.decodedToken.type === "patient"
        ? req.decodedToken.userId
        : req.query.id,
    doctorId:
      req.decodedToken.type === "doctor"
        ? req.decodedToken.userId
        : req.query.id,
  }).sort({ createdAt: -1 });
  console.log(relation);
  res.status(200).json({ message: "success", relation: relation });
};
