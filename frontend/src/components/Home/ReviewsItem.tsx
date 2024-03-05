import Rating from "../UI/StarRating/Rating";

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
  return (
    <div className="w-full sm:w-[calc(50%-32px)] xl:w-[calc(33.33%-32px)] flex flex-col m-4 px-4 py-8 border-[1px] border-bordersColor shadow-md">
      <div className="flex flex-col">
        <div className="flex flex-wrap">
          <i className="fa-regular fa-circle-user flex justify-center items-center text-3xl pr-3 text-defaultRed"></i>
          <div>
            <p className="font-semibold text-lg">{author}</p>
            <p className="">Wrote a review</p>
          </div>
        </div>
        <div className="flex">
          <p className="font-bold">{title}</p>
          <p className="pl-1 font-semibold text-teal-800">@ {restaurant}</p>
        </div>
      </div>
      <Rating rating={rating} />
      <div>{text}</div>
      <div className="flex justify-between flex-grow items-end pt-4">
        <p>{location}</p>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
};

export default ReviewsItem;

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toISOString().split(".")[0].replace("T", " ");
};
