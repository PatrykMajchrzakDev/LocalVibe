import express from "express";
const router = express.Router();
import apiController from "../controllers/databaseApi";

router.get("/restaurants", apiController.getRestaurants)

export default router;
