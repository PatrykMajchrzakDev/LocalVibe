import { Link } from "react-router-dom";
interface CategoryCardProps {
  img: string;
  desc: string;
  src?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ img, desc, src }) => {
  const linkCard = src && (
    <Link to={`/places/${encodeURIComponent(src)}`}>
      <li className="flex flex-col items-center justify-center w-1/2 border-[1px] border-bordersColor md:w-[calc(25%-16px)] m-2 p-2">
        <i
          className={`flex items-center justify-center p-2 text-2xl ${img}`}
        ></i>
        <p>{desc}</p>
      </li>
    </Link>
  );

  const clickCard = src === undefined && (
    <li className="flex flex-col items-center justify-center w-1/2 border-[1px] border-bordersColor md:w-[calc(25%-16px)] m-2 p-2">
      <i className={`flex items-center justify-center p-2 text-2xl ${img}`}></i>
      <p>{desc}</p>
    </li>
  );

  return linkCard ? linkCard : clickCard;
};

export default CategoryCard;
