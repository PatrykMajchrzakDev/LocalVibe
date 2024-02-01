import { Request, Response } from "express";
const fs = require("fs");
const path = require("path");

interface PlacesApi {
  getPlaces: (req: Request, res: Response) => Promise<void>;
}

const placesApi: PlacesApi = {
  getPlaces: async (req, res) => {
    //Google Places API (new)
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
        "places.id,places.displayName,places.formattedAddress,places.priceLevel,places.types,places.rating,places.regularOpeningHours,places.userRatingCount,places.websiteUri",
    };
    const body = JSON.stringify({ textQuery: textQuery, languageCode: "en" });

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

      // const response = await fetch(url, { method: "POST", headers, body });
      // const data = await response.json();
      // if (!response.ok) {
      //   console.error("Error response data:", data); // Log the error response data
      //   throw new Error(`HTTP error status: ${response.status}`);
      // }
      // console.log(data);
      // res.json(data);
    } catch (error: any) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error response:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up request:", error.message);
      }
    }
  },
};

export default placesApi;
