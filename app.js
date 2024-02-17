import dotenv from "dotenv";
import express from "express";
import router from "./routes/main.js";
import ConnectDatabase from "./config/Database.js";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";
import session from "express-session";

const app = express();
dotenv.config();

// PORT
const PORT = 5000 || process.env.PORT;

// connect DB
ConnectDatabase();

// json
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
    // cookie: {
    //   maxAge: new Date(Date.now() + 3600000),
    // },
  })
);

// Route
app.use(router);

app.listen(PORT, () => console.log(`App Listening on port ${PORT}`));
