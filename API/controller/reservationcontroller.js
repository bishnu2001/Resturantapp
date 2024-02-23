const { ErrorHandler } = require('../middleware/error');
const { Reservation } = require('../model/reservationschema');
module.exports.sendReservation = async (req, res, next) => {
    const { firstname, lastname, email, phone, time, date } = req.body;
    if (!firstname || !lastname || !email || !phone || !time || !date) {
        return next(new ErrorHandler("Please fill all reservation form!", 400))
    }
    try {
        await Reservation.create({ firstname, lastname, email, phone, time, date });
        res.status(201).json({
            success: true,
            message: "Reservation sent successfull"
        })
    } catch (error) {
        if (error.name === "ValidationError") {
            const ValidationErrors = Object.values(error.errors).map(err => err.message);
            return next(new ErrorHandler(ValidationErrors.join(", "), 400))
        }
        return next(error)
    }
}