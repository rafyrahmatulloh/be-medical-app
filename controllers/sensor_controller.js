const Sensor = require('../models/sensor_model');

const createSensor = async (req,res) => {
    try {
        const {hr, sys, dys, temp, spo2, ecg, score} = req.body;

        const sensorData = {
            hr,
            sys,
            dys,
            temp,
            spo2,
            ecg,
            score,
            waktu: Date.now(),
        }

        await Sensor.create(sensorData);

        res.status(201).json({
            success : true,
            statusCode : res.statusCode,
            message : "Data berhasil dibuat",
            data: sensorData,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          statusCode: res.statusCode,
          error: error.message,
        });
    }
}

const getSensors = async (req, res) => {
    try {
        const dataSensor = (await Sensor.find().sort({waktu:-1}).limit(5)).reverse();

        if(!dataSensor){
            return res.status(404).json({
                message: 'Data tidak ditemukan',
            })
        }
        res.status(200).json({
            success : true,
            statusCode  : res.statusCode,
            data: dataSensor,
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    
    }
}

module.exports = {createSensor, getSensors};