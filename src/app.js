import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();


// basic config
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// cookie parser
app.use(cookieParser());

// cors config
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(","),
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
  }),
);

// import the routes

import healthCheckRouter from "./routes/healthcheck.route.js";
import authRouter from "./routes/auth.route.js";

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/auth", authRouter);


// middleware error handler

import { errorHandler } from "./middlewares/error.middleware.js";
app.use(errorHandler);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
