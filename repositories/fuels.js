const { PrismaClient } = require('@prisma/client');
const JSONBigInt = require("json-bigint");

const prisma = new PrismaClient();


exports.getFuels = async (type, price) => {
    // It will generate the query
    let orQuery = [];
    if (type) {
        orQuery.push({
            type: { contains: type, mode: "insensitive" },
        });
    }
    if (price) {
        orQuery.push({
            price: { contains: price, mode: "insensitive" },
        });
    }
    if (orQuery.length > 0) {
        query.where = {
            ...query.where,
            OR: orQuery,
        };
    }

    // Find by query
    const searchedFuels = await prisma.fuels.findMany(query);

    // Convert BigInt fields to string for safe serialization
    const serializedFuels = JSONBigInt.stringify(searchedFuels);
    return JSONBigInt.parse(serializedFuels);
};