const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const patient = require('./patientAuth');

const docSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    state:{
        type: String
    },
    city:{
        type: String
    },
    gender:{
        type: String
    },
    age:{
        type: Number
    },
    contact:{
        type: Number
    },

    university: {
        type: String
    },
    specialization: {
        type: String
    },
    honors: {
        type: String
    },
    ratings:{
        type: Number
    },
    yearOfExp: {
        type: Number
    },
    about: {
        type: String
    },
    invitation: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: patient
    }]
    // invitation:{
    //     type:Array
    // }
    ,
    appointment:{
        type: Array
    }
}, {timestamps: true});

module.exports = mongoose.model('doctor', docSchema);