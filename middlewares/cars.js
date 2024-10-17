const { z } = require("zod");
const { BadRequestError } = require("../utils/request");

exports.validateCreateCars = (req, res, next) => {
    req.body ={
        ...req.body,
        rentPerDay : parseInt(req.body.rentPerDay),
        capacity : parseInt(req.body.capacity),
        available : req.body.available === 'true',
        year : parseInt(req.body.year),
        options : JSON.parse(req.body.options),
        specs : JSON.parse(req.body.specs),
    }

    const validateBody = z.object({
        plate : z.string(),
        manufacture : z.string(),
        model : z.string(),
        rentPerDay : z.number(),
        capacity : z.number(),
        description : z.string(),
        availableAt : z.string(),
        transmission : z.string(),
        available : z.boolean(),
        type : z.string(),
        year : z.number(),
        options : z.array(z.string()),
        specs : z.array(z.string()),
    });

    const validateFileBody = z.object({
        image: z.object({
            name : z.string(),
            data : z.any(),
        }),
    });

    // Validate
    const result = validateBody.safeParse(req.body);
    if (!result.success) {
        // If validation fails, return error messages
        throw new BadRequestError(result.error.errors);
    };

    const resultValidateFile = validateFileBody.safeParse(req.files);
    if (!resultValidateFile.success) {
        // If validation fails, return error messages
        throw new BadRequestError(resultValidateFile.error.errors);
    };

    next();
};