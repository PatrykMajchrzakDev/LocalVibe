import express from "express";
const router = express.Router();
import placeController from "../controllers/placesApi";

router.get("/search", placeController.getPlaces);

export default router;
