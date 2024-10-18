const fuelService = require("../services/fuels");
const { successResponse } = require("../utils/response");

exports.getFuels = async (req, res, next) => {
    // Call the usecase or service
    const data = await fuelService.getFuels(
        req.query?.type,
        req.query?.price
    );
    successResponse(res, data);
};