const carsService = require("../services/carsType");
const { successResponse } = require("../utils/response");

exports.createCarsType = async (req, res, next) => {
    // Create the new student
    const data = await carsService.createCarsType(req.body);
    successResponse(res, data);
};