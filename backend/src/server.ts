import express from "express";
import apiRoutes from "../routes/api";
// import { connectDB, pool } from "../config/database";
const app = express();

// ENV files config
require("dotenv").config({ path: "./.env" });

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes setup
app.use("/api", apiRoutes);
//Connect do DB
// connectDB();

//Server Running
app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
