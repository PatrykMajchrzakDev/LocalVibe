import Star from "./Star";

type RatingProps = {
  rating: number;
};

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const totalStars = 5;
  const starElements = [];

  for (let i = 0; i < totalStars; i++) {
    starElements.push(<Star key={i} isGold={i < Math.round(rating)} />);
  }

  return <div className="flex">{starElements}</div>;
};

export default Rating;
