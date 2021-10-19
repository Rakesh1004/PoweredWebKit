const mongoose = require('mongoose');


const addressSchema = new mongoose.Schema({
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true
    }
})

const donorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:[addressSchema],

    bloodgroup:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        default: false,
    }
});
const bloodDonor = mongoose.model('bloodDonor',donorSchema);
module.exports = bloodDonor;