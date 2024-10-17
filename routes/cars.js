const express = require("express");
const {
    validateCreateCars,
} = require("../middlewares/cars");
const {
    createCar,
} = require("../repositories/carsRepository");
const router = express.Router();

router.get('/', (req, res) => {
    const cars = require("../data/cars.json");
    res.json({ cars });
});

module.exports = router;
