const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const relationSchema = new Schema({
    patientId:{
        type: Schema.Types.ObjectId,
        ref: 'patient'
    },
    doctorId:{
        type: Schema.Types.ObjectId,
        ref: 'doctor'
    }
},{timestamps: true});

module.exports = mongoose.model('relation', relationSchema);