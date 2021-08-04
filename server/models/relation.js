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
    },
    message:{
        type:String,
        required:true
    },
    sender:{
        type: String,
        enum: ['patient','doctor'],
        required:true
        //0: doctor, 1:patient
    }
},{timestamps: true});

module.exports = mongoose.model('relation', relationSchema);