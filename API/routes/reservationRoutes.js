const express = require('express');
const { sendReservation } = require('../controller/reservationcontroller')
const router = express.Router();
router.post('/send', sendReservation);
module.exports = router;
