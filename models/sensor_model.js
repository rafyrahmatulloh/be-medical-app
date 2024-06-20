const mongoose = require('mongoose');

const sensorShcema = new mongoose.Schema({
    hr: {
        type: Number,
        required: false,
    },
    sys: {
        type: Number,
        required: false,
    },
    dys: {
        type: Number,
        required: false,
    },
    temp: {
        type: Number,
        required: false,
    },
    spo2: {
        type: Number,
        required: false,
    },
    ecg: {
        type: Number,
        required: false,
    },
    score: {
        type: Number,
        required: false,
    },
    waktu: {
        type: Date,
        default: Date.now,
      },
});

const Sensor = mongoose.model("Sensor", sensorShcema);

module.exports = Sensor;
