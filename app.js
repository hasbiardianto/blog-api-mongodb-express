import dotenv from 'dotenv'
import express from 'express'
import ConnectDB from './config/db.js';
import router from './routes/PostRoute.js';

const app = express();
dotenv.config()

// PORT
const PORT = 5000 || process.env.PORT;

// connect DB
ConnectDB()

// json 
app.use(express.json());

// Route
app.use(router)

app.listen(PORT, ()=> console.log(`App Listening on port ${PORT}`));