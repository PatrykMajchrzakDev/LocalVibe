interface ReviewProps {
  review: {
    id: string;
    author: string;
    title: string;
    text: string;
    rating: number;
    created_at: Date;
    location: string;
    restaurant: string;
  };
}

const ReviewsItem: React.FC<ReviewProps> = ({ review }) => {
  const { author, title, text, rating, created_at, location, restaurant } =
    review;
  const formattedDate = formatDate(String(created_at));
  console.log(review);
  return (
    <div className="w-[calc(30%-16px)] flex flex-col">
      <div>
        <p>{author}</p>
        <p>{title}</p>
      </div>

      <div>
        <p>{restaurant}</p>
        <p>{rating}</p>
      </div>

      <div>{text}</div>
      <div>
        <p>{formattedDate}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default ReviewsItem;

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toISOString().split(".")[0].replace("T", " ");
};
