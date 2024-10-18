const fuelRepository = require("../repositories/fuels");
const {imageUpload} = require("../utils/image-kit");
const {
    NotFoundError, 
    InternalServerError,
} = require("../utils/request");

exports.getFuels = (type, price) => {
    return fuelRepository.getFuels(type, price);
};