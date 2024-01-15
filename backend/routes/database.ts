import express from "express";
const router = express.Router();
import apiController from "../controllers/databaseApi";

router.get("/randomReviews", apiController.getRandomReviews);

export default router;
