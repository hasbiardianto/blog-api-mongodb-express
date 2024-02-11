require('dotenv').config();
const express = require('express');
const ConnectDB = require('./config/db');
const PostRoute = require("./routes/PostRoute.js");

const app = express();

// PORT
const PORT = 5000 || process.env.PORT;

// connect DB
ConnectDB();

// json 
app.use(express.json());

// Route
app.use(PostRoute);

app.listen(PORT, ()=> console.log(`App Listening on port ${PORT}`));