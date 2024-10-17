const carsRepository = require("../repositories/carsType");
const {
    NotFoundError, 
    InternalServerError,
} = require("../utils/request");

exports.createCarsType = async (data, file) => {     
    return carsRepository.createCarsType(data);
};