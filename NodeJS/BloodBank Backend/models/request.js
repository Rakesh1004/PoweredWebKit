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

const reqSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:addressSchema,
    bloodgroup:{
        type: String,
        required: true
    },
    reason:{
        type: String,
        required: true     
    },
    //These fields are to be present in the body while filling up Request Blood Form
    uid: {
        type: String,
        required: true
    },
    phno: {
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        default: false,
    }
})
const bloodReciever = mongoose.model('bloodReciever',reqSchema);
module.exports = bloodReciever