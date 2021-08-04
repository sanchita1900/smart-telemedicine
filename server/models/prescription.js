const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        ref: 'doctor'
    },
    recieverId: {
        type: Schema.Types.ObjectId,
        ref: 'patient'
    },
    message:{
        type: String,
        required : true
    }
},{timestamps: true})

module.exports = mongoose.model('prescription', prescriptionSchema);