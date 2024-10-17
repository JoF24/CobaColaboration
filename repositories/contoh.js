const { Pool } = require('pg');

const pool = new Pool({
    user: '',
    host: '',
    database: '',
    password: '',
    port: 5432,
});

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
        console.error("Error creating Cars table:", err.message);
    }
};

exports.createCar = async (data) => {
    const query = `
        INSERT INTO Cars (id, plate, manufacture, model, image, rentPerDay, capacity, description, availableAt, transmission, available, type, year, options, specs)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
        RETURNING *;
    `;
    
    const values = [
        uuidv4(), 
        data.plate, 
        data.manufacture, 
        data.model, 
        data.image, 
        data.rentPerDay, 
        data.capacity, 
        data.description, 
        data.availableAt, 
        data.transmission, 
        data.available, 
        data.type, 
        data.year, 
        data.options, 
        data.specs
    ];

    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (err) {
        console.error("Error creating car:", err.message);
    }
};

exports.getCarById = async (id) => {
    const query = `
        SELECT * FROM Cars WHERE id = $1;
    `;

    try {
        const result = await pool.query(query, [id]);
        return result.rows[0];
    } catch (err) {
        console.error("Error retrieving car:", err.message);
    }
};

exports.updateCar = async (id, data) => {
    const query = `
        UPDATE Cars
        SET plate = $1, manufacture = $2, model = $3, image = $4, rentPerDay = $5, capacity = $6, description = $7, availableAt = $8, transmission = $9, available = $10, type = $11, year = $12, options = $13, specs = $14
        WHERE id = $15
        RETURNING *;
    `;

    const values = [
        data.plate, 
        data.manufacture, 
        data.model, 
        data.image, 
        data.rentPerDay, 
        data.capacity, 
        data.description, 
        data.availableAt, 
        data.transmission, 
        data.available, 
        data.type, 
        data.year, 
        data.options, 
        data.specs, 
        id
    ];

    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (err) {
        console.error("Error updating car:", err.message);
    }
};

exports.deleteCarById = async (id) => {
    const query = `
        DELETE FROM Cars WHERE id = $1
        RETURNING *;
    `;

    try {
        const result = await pool.query(query, [id]); 
        return result.rows[0];
    } catch (err) {
        console.error("Error deleting car:", err.message);
    }
};
