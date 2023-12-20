import { Link } from "react-router-dom";

interface MoreCategoryItemProps {
  url: string;
  desc: string;
  img: string;
}

const MoreCategoryItem: React.FC<MoreCategoryItemProps> = ({
  desc,
  img,
  url,
}) => {
  return (
    <li className="flex w-[calc(50%-16px)] md:w-[calc(25%-16px)] m-2">
      <Link to={`/places/${encodeURIComponent(url)}`}>
        <div className="flex hover:underline">
          <i
            className={`flex items-center p-2 text-xl text-red-500 ${img}`}
          ></i>
          <p className="flex items-center">{desc}</p>
        </div>
      </Link>
    </li>
  );
};

export default MoreCategoryItem;
