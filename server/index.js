require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./routes/authRoute");
const app = express();

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/usersdb";

// MIDDLEWARES
app.use(cors());
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
