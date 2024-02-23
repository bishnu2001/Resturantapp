const mongoose = require('mongoose');
const validator = require('validator');

const reservationschema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minLength: [3, "first name must be contain at least 3 character"],
        mixLength: [30, "first name can not exceed  30 character"],
    },
    lastname: {
        type: String,
        required: true,
        minLength: [3, "Last name must be contain at least 3 character"],
        mixLength: [30, "Last name can not exceed  30 character"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "provide a valid email"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [11, "number must be contain at least 11 digit"],
        mixLength: [11, "number must be contain at least 11 digit"],
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
},{timestamps:true});

const Reservation = mongoose.model("Reservation",reservationschema);

module.exports={Reservation}