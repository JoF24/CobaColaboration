const { PrismaClient } = require("@prisma/client");
const JSONBigInt = require("json-bigint");

const prisma = new PrismaClient();

exports.createCarsTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS Cars (
            id UUID PRIMARY KEY,
            plate VARCHAR(20) NOT NULL,
            manufacture VARCHAR(50) NOT NULL,
            model VARCHAR(50) NOT NULL,
            image VARCHAR(255),
            rentPerDay INTEGER NOT NULL,
            capacity INTEGER NOT NULL,
            description TEXT,
            availableAt TIMESTAMP NOT NULL,
            transmission VARCHAR(50),
            available BOOLEAN NOT NULL,
            type VARCHAR(50),
            year INTEGER NOT NULL,
            options JSONB,
            specs JSONB
        );
    `;

    try {
        await pool.query(query);
        console.log("Cars table created successfully");
    } catch (err) {
        console.error("Error creating Cars table", err);
    }
};
