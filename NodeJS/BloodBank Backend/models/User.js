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

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        // unique: true
    },
    address:addressSchema,
    bloodgroup:{
        type: String,
        required: true
    },
    //These fields are to be present in the body while filling up details page between dashboard and SAWOLogin
    uid:{
        type: String,
        required: true
    },
    phno:{
        type: String,
        required: true
    }
});
const userReciever = mongoose.model('userReciever',userSchema);
module.exports = userReciever;