import { useMemo } from "react";
import ReviewsItem from "./ReviewsItem";
import { fetchRandomReviews } from "../../util/api/httpRequests";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../UI/Spinner";

type Review = {
  id: string;
  author: string;
  title: string;
  text: string;
  rating: number;
  created_at: Date;
  location: string;
  restaurant: string;
};

const Reviews = () => {
  const { data, isLoading, isError, error } = useQuery<Review[], Error>({
    queryKey: ["dummyReviews"],
    queryFn: fetchRandomReviews,
    staleTime: 300000,
  });

  const randomReviews = useMemo(() => {
    if (data) {
      return shuffleArray([...data]).slice(0, 9);
    }
    return [];
  }, [data]);

  if (isLoading)
    return (
      <div>
        <Spinner message="Loading reviews..." />
      </div>
    );

  if (isError)
    return (
      <div>
        <p>Error: {error.message}</p>
        <p>
          Sorry, we could not get reviews. There is a problem with connecting to
          backend server. Try again later.
        </p>
      </div>
    );

  return (
    <div className="flex flex-wrap xl:max-w-7xl mx-auto p-5">
      {randomReviews.map((review) => (
        <ReviewsItem key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;

// array: Review[] indicates that the function accepts an array of Review objects as an argument.
// Review[] after the function declaration indicates that the function returns an array of Review objects.
//Fisher Yates Shuffle
function shuffleArray(array: Review[]): Review[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
