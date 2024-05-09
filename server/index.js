require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./routes/authRoute");
const app = express();

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/usersdb";

const prodOrigins = [process.env.ORIGIN_1, process.env.ORIGIN_2];

const devOrigin = ["http://localhost:5173"];

const allowedOrigins =
  process.env.NODE_ENV === "production" ? prodOrigins : devOrigin;

// MIDDLEWARES
app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin)) {
        console.log(origin, allowedOrigins);
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["POST"],
  })
);

app.use(express.json());

// ROUTE
app.use("/api/auth", authRouter);

// MONGO DB CONNECTION
mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB:", error));

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

// SERVER
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
