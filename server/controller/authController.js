const Patient = require('../models/patientAuth');
const Doctor = require('../models/docAuth');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handlePatientSignup = async (req,res) => {
    try {
        const patient = await Patient.findOne({ email: req.body.email });
        if (patient) return res.status(400).send('already exists');
        const hashed = await bcrypt.hash(req.body.password, 10);
        const newpatient = new Patient({
            name: req.body.name,
            email: req.body.email,
            password: hashed,
          });
          await newpatient.save();
          console.log(req.body);
          // delete newpatient.password;
          res.json({
            message: 'successfully added',
            newpatient,
          });
        } catch (err) {
          console.log(err);
          res.status(501).json({ message: 'Error' });
        }
};

const handleDocSignup = async(req,res) => {
    try{
        const doctor = await Doctor.findOne({ email: req.body.email });
        if (doctor) return res.status(400).send('already exists');
        const hashed = await bcrypt.hash(req.body.password, 10);
        const newdoctor = new Doctor({
            name: req.body.name,
            email: req.body.email,
            password: hashed,
          });
          await newdoctor.save();
          delete newdoctor.password;
          res.json({
            message: 'successfully added',
            newpatient,
          });
    }catch (err) {
        console.log(err);
        res.status(501).json({ message: 'Error' });
      }
};

const handlePatientLogin = async(req,res) => {
    try{
        const user = await Patient.findOne({ email: req.body.email });
        if (!user) return res.status(400).json({ success: false, message: 'invalid email' });
        if (user) {
            const cmp = await bcrypt.compare(req.body.password, user.password);
            if (cmp) {
              const token = jwt.sign({ userId: user._id,type:'patient' },'test');
              delete user.password;
              return res.json({
                success: true,
                user,
                message: 'login successfull',
                token,
              });
            }
            else{
                return res.status(400).json({ success: false, message: 'wrong password' });
            }
          }
    }catch (err) {
        console.log(err);
        res.status(501).json({ message: 'Error' });
      }
};

const handleDocLogin = async (req,res) => {
    try{
        const user = await Doctor.findOne({ email: req.body.email });
        if (!user) return res.status(400).json({ success: false, message: 'invalid email' });
        if (user) {
            const cmp = await bcrypt.compare(req.body.password, user.password);
            if (cmp) {
              const token = jwt.sign({ userId: user._id,type:'doctor' },'test');
              delete user.password;
              return res.json({
                success: true,
                user,
                message: 'login successfull',
                token,
              });
            }
            else{
                return res.status(400).json({ success: false, message: 'wrong password' });
            }
          }
    }catch (err) {
        console.log(err);
        res.status(501).json({ message: 'Error' });
      }
}


module.exports = {
    handlePatientSignup,handleDocSignup,handlePatientLogin,handleDocLogin,
  };




