const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')
const errorMiddleware = require("./middleware/error");


const dotenv = require("dotenv");

// Config
dotenv.config({path:"backend/config/config.env"});

app.use(express.json());
app.use(cookieParser());

//Route Import
const user = require('./routes/userRoutes');

app.use("/api/v1/user",user);

app.use(errorMiddleware);

module.exports = app