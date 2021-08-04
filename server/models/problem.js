const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const problemSchema = new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        ref: 'patient'

    },
    recieverId: {
        type: Schema.Types.ObjectId,
        ref: 'doctor'
    },
    message:{
        type: String,
        required : true
    }
},{timestamps: true})

module.exports = mongoose.model('problem', problemSchema);