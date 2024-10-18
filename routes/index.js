const express = require("express");
const fuelsRouter = require("./fuels");

const router = express.Router();

router.use("/fuels", fuelsRouter);

module.exports = router;