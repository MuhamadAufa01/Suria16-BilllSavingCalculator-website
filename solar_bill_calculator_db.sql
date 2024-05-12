CREATE TABLE bills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    electricity_usage FLOAT NOT NULL,
    water_usage FLOAT NOT NULL,
    electricity_cost FLOAT NOT NULL,
    water_cost FLOAT NOT NULL,
    total_cost FLOAT NOT NULL
);
