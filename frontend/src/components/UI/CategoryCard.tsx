import { Link } from "react-router-dom";
interface CategoryCardProps {
  img: string;
  desc: string;
  src?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ img, desc, src }) => {
  const linkCard = src && (
    <div className="flex flex-wrap items-center justify-center w-[calc(50%-16px)] border-[1px] border-bordersColor shadow-sm m-2 px-2 py-10 md:w-[calc(25%-16px)] hover:shadow-md">
      <li>
        <Link to={`/places/${encodeURIComponent(src)}`}>
          <i
            className={`flex items-center justify-center p-2 text-2xl text-red-500 ${img}`}
          ></i>
          <p className="text-base">{desc}</p>
        </Link>
      </li>
    </div>
  );

  const clickCard = src === undefined && (
    <li className="flex flex-col items-center justify-center ">
      <i className={`flex items-center justify-center p-2 text-2xl ${img}`}></i>
      <p className="text-base sm:text-lg">{desc}</p>
    </li>
  );

  return linkCard ? linkCard : clickCard;
};

export default CategoryCard;
