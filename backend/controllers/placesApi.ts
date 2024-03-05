import { Request, Response } from "express";
const fs = require("fs");
const path = require("path");

interface PlacesApi {
  getPlaces: (req: Request, res: Response) => Promise<void>;
}
interface PlacesApiDummy {
  getPlacesDummy: (req: Request, res: Response) => Promise<void>;
}

//Dummy fetch from server file
export const placesApiDummy: PlacesApiDummy = {
  getPlacesDummy: async (req, res) => {
    //Send POST request
    const filePath = path.join(__dirname, "../src/dummyPlaces.json");
    try {
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          res.status(500).send("Error reading the data file");
          return;
        }
        res.json(JSON.parse(data));
      });
    } catch (error) {
      console.error("Fetch error: " + error.message);
      // Handle the error or throw it so it can be caught further up the call stack
      throw error;
    }
  },
};

//Fetch from Google Places API (new)
export const placesApi: PlacesApi = {
  getPlaces: async (req, res) => {
    //New API requires a POST request with a JSON body

    //Place and location are passed in as query parameters
    const place = (req.query.find_desc as string).trim();
    const location = (req.query.find_loc as string)
      .trim()
      .replace(/[\s,.]+/g, "+");
    const textQuery = `${place}${location}`;
    const url = "https://places.googleapis.com/v1/places:searchText";

    //Headers and body for POST request
    const headers = {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": process.env.GOOGLE_API_ID,
      "X-Goog-FieldMask":
        "places.id,places.displayName,places.formattedAddress,places.rating,places.userRatingCount,places.websiteUri,places.location,places.regularOpeningHours",
    };
    const body = JSON.stringify({ textQuery: textQuery, languageCode: "en" });
    console.log(textQuery);
    //Send POST request
    try {
      const response = await fetch(url, { method: "POST", headers, body });
      const data = await response.json();
      if (!response.ok) {
        // Throw an error with the status text, which can be caught below
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log(data);
      res.json(data);
    } catch (error) {
      console.error("Fetch error: " + error.message);
      // Handle the error or throw it so it can be caught further up the call stack
      throw error;
    }
  },
};
