import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import dataRoutes from "./routes/employee_details.js";
import userRoutes from "./routes/users.js";

import dotenv from "dotenv"

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/employee-data", dataRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Employee Management System API");
});

const CONNECTION_URL = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.connection
  .once("open", () => console.log("Connected to MongoDB"))
  .on("error", (error) => console.warn("Error occurred", error));
