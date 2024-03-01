import express from "express";
const router = express.Router();
import { placesApi, placesApiDummy } from "../controllers/placesApi";

router.get("/search", placesApi.getPlaces);
// router.get("/search", placesApiDummy.getPlacesDummy);

export default router;
