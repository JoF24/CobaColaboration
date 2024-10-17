const express = require("express");
const {
    validateCreateCarsType,
} = require("../middlewares/carsType");
const {
    createCarsType,
} = require("../controllers/carsType");

const router = express.Router();

router.post("/", validateCreateCarsType, createCarsType);

module.exports = router;