const express = require("express");
const {
    validateGetFuels,
    validateGetFuelById,
    validateDeleteFuelById,
    validateCreateFuel,
    validateUpdateFuel,
} = require("../middlewares/fuels");
const {
    getFuels,
    getFuelById,
    deleteFuelById,
    createFuel,
    updateFuel,
} = require("../controllers/fuels");

const router = express.Router();

// It will be run the URL based on path and the method
router
    .route("/")
    .get(validateGetFuels, getFuels)
    .post(validateCreateFuel, createFuel);

router
    .route("/:id")
    .get(validateGetFuelById, getFuelById)
    .put(validateUpdateFuel, updateFuel)
    .delete(validateDeleteFuelById, deleteFuelById);

module.exports = router;
