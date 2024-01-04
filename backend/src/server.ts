import express from "express";
import apiRoutes from "../routes/api";
const app = express();
import cors from 'cors'

// ENV files config
require("dotenv").config({ path: "./.env" });

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//CORS policy
app.use(cors())

//Routes setup
app.use("/api", apiRoutes);


//Server Running
app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
