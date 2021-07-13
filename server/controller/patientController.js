const Patient = require('../models/patientAuth');
const Doctor = require('../models/docAuth');


exports.getProfile = async (req,res) => {
    // const id = req.params.userId;
    try {
        const profile = await Patient.findById({_id:req.decodedToken.userId});
        console.log(profile);
        delete profile.password;
        res.status(200).json({ message: "success", profile: profile });
    } catch (err) {
        console.log(err);
    }
}

exports.saveProfile = async (req,res,next) => {
    const { name,email,state,city, gender, age, contact, weight, height, about, disease, medicine } = req.body;
    try {
        const patient = await Patient.findById({_id:req.decodedToken.userId});
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
}