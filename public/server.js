// Required packages (dependencies)
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Express Setup
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));