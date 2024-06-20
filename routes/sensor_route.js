const express = require('express');
const sensorC = require('../controllers/sensor_controller');

const router = express.Router();

router.post('/sensor', sensorC.createSensor);
router.get('/sensor', sensorC.getSensors);

module.exports = router;