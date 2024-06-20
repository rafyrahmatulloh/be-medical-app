require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDb = require('./config/database.js');
const sensorR = require('./routes/sensor_route.js');
const userR = require('./routes/user_route.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
(connectDb());

app.use('/api', sensorR);
app.use('/user', userR);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
})