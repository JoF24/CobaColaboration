const { z } = require("zod");
const { BadRequestError } = require("../utils/request");

exports.validateCreateCarsType = (req, res, next) => {
    // Validation body schema
    const validateBody = z.object({
        type : z.string(),
        description : z.string(),
    });

    
    // Validate
    const result = validateBody.safeParse(req.body);
    if (!result.success) {
        // If validation fails, return error messages
        throw new BadRequestError(result.error.errors);
    }
    next();
};
