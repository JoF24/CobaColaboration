const { z } = require("zod");
const { BadRequestError } = require("../utils/request");

exports.validateGetFuels = (req, res, next) => {
    // Validate the query
    const validateQuery = z.object({
        type: z.string(),
        price: z.string(),
        octan_rating: z.string()
    });

    const resultValidateQuery = validateQuery.safeParse(req.query);
    if (!resultValidateQuery.success) {
        // If validation fails, return error messages
        throw new BadRequestError(resultValidateQuery.error.errors);
    }

    next();
};