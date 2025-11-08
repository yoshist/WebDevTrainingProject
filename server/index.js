// Importing Express module
// const express = require("express");
import express from "express";
// const mysql = require('mysql')
import mysql from "mysql2/promise";

// Import dotenv module.
import dotenv from "dotenv";
dotenv.config();

// Create an express instance
const app = express();

// Define a route to handle GET requests
app.get("/", function(req, res) {
    res.send("Hello World!");
});

// Create MySQL connection

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT): 3306,
});

// Test database connection
async function testDBConnection() {
    try {
        const connection = await db.getConnection();
        console.log("Connected to MySQL database");
        connection.release();
    } catch (err) {
        console.error("Database connection failed:", err);
    }
}


// Read in PORT number.  Set 3000 to default value
const  PORT = process.env.DB_PORT || 3000;

// Set up server listening
app.listen(PORT, function() {
    console.log(`server is running on port ${PORT}`);
});



