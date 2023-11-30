const DropdownMenuItem: React.FC<{ name: string; url: string }> = ({
  name,
  url,
}) => {
  return (
    <li className="p-2 w-[140px] px-2 py-3 hover:bg-gray-200 rounded-md">
      <a href={url} className="">
        <span className="text-black">{name}</span>
      </a>
    </li>
  );
};

export default DropdownMenuItem;
