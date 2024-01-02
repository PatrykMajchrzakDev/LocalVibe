import { Prisma, PrismaClient } from "@prisma/client";
const client = new PrismaClient();

//Create function that provide raw data to dummy-reviews table

const createDummyReviews = (): Prisma.dummyReviewsCreateInput[] => [
  {
    author: "John Doe",
    title: "Great Experience",
    text: "I had a wonderful experience at Joe's Crab Shack.",
    rating: 5,
    location: "New York",
    restaurant: "Joe's Crab Shack",
  },
  {
    author: "Alice Johnson",
    title: "Disappointing",
    text: "The food quality was below par at Olive Garden.",
    rating: 2,
    location: "Los Angeles",
    restaurant: "Olive Garden",
  },
  {
    author: "Michael Smith",
    title: "Delicious Food",
    text: "I enjoyed every dish I ordered at The Cheesecake Factory!",
    rating: 4,
    location: "Chicago",
    restaurant: "The Cheesecake Factory",
  },
  {
    author: "Emily Brown",
    title: "Terrible Service",
    text: "The service was slow and unprofessional at Red Lobster.",
    rating: 1,
    location: "San Francisco",
    restaurant: "Red Lobster",
  },
  {
    author: "David Lee",
    title: "Average",
    text: "The food was okay, but nothing special at TGI Fridays.",
    rating: 3,
    location: "Houston",
    restaurant: "TGI Fridays",
  },
  {
    author: "Sophia Wilson",
    title: "Excellent Dining",
    text: "The ambiance and food were excellent at Ruth's Chris Steak House.",
    rating: 5,
    location: "Miami",
    restaurant: "Ruth's Chris Steak House",
  },
  {
    author: "Oliver Clark",
    title: "Not Worth It",
    text: "I expected better for the price at Applebee's.",
    rating: 2,
    location: "Seattle",
    restaurant: "Applebee's",
  },
  {
    author: "Emma Hall",
    title: "Highly Recommend",
    text: "I would definitely recommend this place - The Capital Grille.",
    rating: 4,
    location: "Boston",
    restaurant: "The Capital Grille",
  },
  {
    author: "Ava Adams",
    title: "Worst Experience",
    text: "It was a terrible dining experience at Denny's.",
    rating: 1,
    location: "Denver",
    restaurant: "Denny's",
  },
  {
    author: "Liam Taylor",
    title: "Good Value",
    text: "Affordable prices and decent food at Chili's.",
    rating: 3,
    location: "Dallas",
    restaurant: "Chili's",
  },
  {
    author: "Mia Turner",
    title: "Impressive",
    text: "I was pleasantly surprised by the quality at P.F. Chang's.",
    rating: 4,
    location: "Atlanta",
    restaurant: "P.F. Chang's",
  },
  {
    author: "Noah White",
    title: "Overpriced",
    text: "The food didn't justify the high prices at The Melting Pot.",
    rating: 2,
    location: "Philadelphia",
    restaurant: "The Melting Pot",
  },
  {
    author: "Isabella Harris",
    title: "Satisfied",
    text: "I left the restaurant satisfied with my meal at Texas Roadhouse.",
    rating: 4,
    location: "Phoenix",
    restaurant: "Texas Roadhouse",
  },
  {
    author: "James Davis",
    title: "Mediocre",
    text: "It was an average dining experience at Outback Steakhouse.",
    rating: 3,
    location: "Detroit",
    restaurant: "Outback Steakhouse",
  },
  {
    author: "Olivia Martinez",
    title: "Excellent Service",
    text: "The service was outstanding at Maggiano's Little Italy.",
    rating: 5,
    location: "Minneapolis",
    restaurant: "Maggiano's Little Italy",
  },
  {
    author: "Benjamin Rodriguez",
    title: "Great Food",
    text: "The food was flavorful and well-prepared at Cheesecake Factory.",
    rating: 5,
    location: "San Diego",
    restaurant: "Cheesecake Factory",
  },
  {
    author: "Avery Gonzalez",
    title: "Not Recommended",
    text: "I wouldn't recommend this place - Applebee's.",
    rating: 2,
    location: "Portland",
    restaurant: "Applebee's",
  },
  {
    author: "Elizabeth Perez",
    title: "Decent",
    text: "It was an okay dining experience at Chili's.",
    rating: 3,
    location: "Las Vegas",
    restaurant: "Chili's",
  },
  {
    author: "Henry Miller",
    title: "Fantastic",
    text: "I had a fantastic time at this restaurant - The Capital Grille.",
    rating: 5,
    location: "Orlando",
    restaurant: "The Capital Grille",
  },
  {
    author: "Sofia Walker",
    title: "Avoid It",
    text: "Avoid this place at all costs - Denny's!",
    rating: 1,
    location: "Raleigh",
    restaurant: "Denny's",
  },
];

const main = async () => {
  const users = await Promise.all(
    createDummyReviews().map((review) =>
      client.dummyReviews.create({ data: review })
    )
  );
};

main();
