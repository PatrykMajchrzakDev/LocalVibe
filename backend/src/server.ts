import express from "express";
import apiRoutes from "../routes/database";
import placesRoutes from "../routes/places";
const app = express();
import cors from "cors";

// ENV files config
require("dotenv").config({ path: "./.env" });

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//CORS policy
app.use(cors());

//Routes setup
app.use("/api", apiRoutes);
app.use("/places", placesRoutes);

//Server Running
app.listen(3000, () => {
  console.log(`Server is running at 3000`);
});
