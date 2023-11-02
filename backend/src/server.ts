import express from "express";
import apiRoutes from "../routes/api";
const app = express();

// ENV files config
require("dotenv").config({ path: "./config/.env" });

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes setup
app.use("/api", apiRoutes);

//Server Running
app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
