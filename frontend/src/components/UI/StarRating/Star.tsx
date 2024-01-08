type StarProps = {
  isGold: boolean;
};
const Star: React.FC<StarProps> = ({ isGold }) => {
  return (
    <img
      src={
        isGold
          ? "src//assets/imgs/gold-star.png"
          : "src//assets/imgs/gray-star.png"
      }
      alt="Star"
      className="w-8"
    />
  );
};

export default Star;
