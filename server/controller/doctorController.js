const Patient = require('../models/patientAuth');
const Doctor = require('../models/docAuth');


exports.getProfile = async (req,res) => {
    // const id = req.params.userId;
    try {
        const profile = await Doctor.findById({_id:req.decodedToken.userId});
        console.log(profile);
        delete profile.password;
        delete profile._id;
        res.status(200).json({ message: "success", profile: profile });
    } catch (err) {
        console.log(err);
    }
}

exports.saveProfile = async (req,res,next) => {
    const { name,email,state,city, gender, age, contact, university, specialization, honors, yearOfExp, about } = req.body;
    try {
        const doctor = await Doctor.findById({_id:req.decodedToken.userId});
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
}

exports.checkInvitation = async(req,res,next) => {
    const id = req.decodedToken.userId;
    try{
        const doctor = await Doctor.findById(id).populate("invitation");
        console.log(doctor);
        let inviteArr = doctor.invitation;

        //let arr = [];
        // for(let i=0;i<inviteArr.length;i++){
        //     const patient  = await Patient.findById(inviteArr[i]);
        //     arr.push(patient);
        // }
        // console.log(arr);
        res.status(200).json({message: "success", arr: inviteArr});
    }catch(err){
        console.log(err);
        next(err);
    }
}