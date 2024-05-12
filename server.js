const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3000;

// MySQL database connection configuration
const dbConfig = {
    host: 'MohdAufa',
    user: 'MohdAufa',
    password: '@ufa_TtIiZzOo2001',
    database: 'solar_bill_calculator_db'
};

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Middleware to parse JSON requests
app.use(express.json());

// Save bill data to the MySQL database
app.post('/save', (req, res) => {
    const { electricityUsage, waterUsage, electricityCost, waterCost, totalCost } = req.body;

    // SQL query to insert bill data into the database
    const sql = `INSERT INTO bills (electricity_usage, water_usage, electricity_cost, water_cost, total_cost)
                 VALUES (?, ?, ?, ?, ?)`;

    // Execute the SQL query using the connection pool
    pool.query(sql, [electricityUsage, waterUsage, electricityCost, waterCost, totalCost], (error, results) => {
        if (error) {
            console.error('Error saving bill data:', error);
            res.status(500).send('Error saving bill data');
        } else {
            res.status(201).send('Bill data saved successfully');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
