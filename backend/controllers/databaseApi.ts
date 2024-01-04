import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

const databaseApi = {
  getRestaurants: async (req, res) => {
    try {
      console.log("test");
    } catch (error) {
      console.log(error);
    }
  },
  getRandomReviews: async (req, res) => {
    try {
      //Gets all reviews from the database (there is only 20)
      const randomReviews = await client.dummyReviews.findMany();
      res.json(randomReviews);
    } catch (error) {
      console.error("Could not fetch random reviews from the database", error);
      res.status(500).json({ error: "Internal Server Error" }); // Send an error response
    }
  },
};

export default databaseApi;
