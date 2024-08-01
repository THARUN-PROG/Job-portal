import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connection } from "./database/connection.js"; 
import { errorMiddleware } from "./middlewares/error.js";

const app = express();
config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL], //here we will give the url of my frontend.
    methods: ["GET", "POST", "PUT", "DELETE"], //Frontend methods that I'll use in backend.
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection();
app.use(errorMiddleware); //to check the errors of the pages.

export default app;
