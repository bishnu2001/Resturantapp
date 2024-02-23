const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { database } = require('./config/db')
const { errormiddleware } = require('./middleware/error');
const reservationrouter = require('./routes/reservationRoutes');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors({
    origin: [process.env.CLIENT_URL],
    methods: ["POST"],
    credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json('bishnu')
});
database();
app.use('/api/v1/reservation', reservationrouter);
app.use(errormiddleware)

app.listen(PORT, () => {
    console.log(`server running at ${PORT}`)
});