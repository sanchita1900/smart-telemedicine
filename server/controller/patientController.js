const Patient = require('../models/patientAuth');
const Doctor = require('../models/docAuth');
const Relation = require('../models/relation');
const { response } = require('express');

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

exports.getDoctors = async(req,res,next) => {
    const id = req.decodedToken.userId;
    try{
        // const patient = Patient.findById({_id:id});
        // const docInRel = await Relation.find({ patientId: id })
        const doctors = await Doctor.find();
        // const reqDoc = patient.request;
        // const relDoc = docInRel.map(e => e.doctorId.toString());
        // const filterDoc = doctors.filter(el => !fdoc.includes(el._id.toString()));
        res.status(200).json({ message: "success", doctors: doctors });
    }
    catch(err){
        next(err);
    }
}

exports.sendRequest = async(req,res,next) => {
    try{
        const docId = req.params.id;
        console.log(req.params.id);
        const patientId = req.decodedToken.userId;
        const doctor = await Doctor.findById(docId);
        console.log(doctor)
         const patient = await Patient.findById(patientId);
         if(patient.request.find(x => x === docId)){
            res.status(400).json({ message:"request already sent"})
         }
         else{
            patient.request.push(docId);
         await patient.save();
         res.status(200).json({ message: "success" });
         }
        
        if(doctor.invitation.find(x => x===patientId)){
            res.status(400).json({ message:"request already sent"})
        }
        else
        {doctor.invitation.push(patientId);
        await doctor.save();
        res.status(200).json({ message: "success",doctor });}
    }catch(err){
        console.log(err);
        next(err);
    }
}

exports.cancelRequest = async(req,res,next) => {
    try{
        const docId = req.params.id;
        console.log(req.params.id);
        const patientId = req.decodedToken.userId;
        const doctor = await Doctor.findById(docId);
         const patient = await Patient.findById(patientId);
         if(patient.request.find(x => x === docId)){
            patient.request.pop(docId);
            await patient.save();
            res.status(200).json({ message: "success" });
         }
         else{
            res.status(400).json({message: "doctor not requested already"});
         }
        
        if(doctor.invitation.find(x => x===patientId)){
            doctor.invitation.pop(patientId);
            await doctor.save();
            res.status(200).json({ message: "success" });
        }
        else
        {res.status(400).json({ message:"no request from patient"})}
    }catch(err){
        console.log(err);
        next(err);
    }
}