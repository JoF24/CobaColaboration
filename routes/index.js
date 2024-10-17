const express = require("express");
const carsRouter = require("./cars");

const router = express.Router();

router.use("/carsType", carsRouter);

module.exports = router;