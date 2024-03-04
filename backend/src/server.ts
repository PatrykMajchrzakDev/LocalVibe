import express from "express";
import apiRoutes from "../routes/database";
import placesRoutes from "../routes/places";
const app = express();
import cors from "cors";

// ENV files config
require("dotenv").config({ path: "./.env" });

//CORS policy
const corsOptions = {
  origin: ["https://local-vibe.vercel.app", "http://localhost:5173"], // or '*' for any origin
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes setup
app.use("/api", apiRoutes);
app.use("/places", placesRoutes);

//Server Running
app.listen(3000, () => {
  console.log(`Server is running at 3000`);
});
