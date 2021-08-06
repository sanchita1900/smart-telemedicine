const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const doctor = require("./docAuth");

const patientSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    gender: {
      type: String,
    },
    age: {
      type: Number,
    },
    contact: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    height: {
      type: Number,
    },
    disease: {
      type: String,
    },
    medicine: {
      type: Array,
    },
    about: {
      type: String,
    },
    request: [{ type: mongoose.Schema.Types.ObjectId, ref: "doctor" }],
    appointedDocs: [{ type: mongoose.Schema.Types.ObjectId, ref: "doctor" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("patient", patientSchema);
