const DropdownMenuItem: React.FC<{ name: string; url: string }> = ({
  name,
  url,
}) => {
  return (
    <li className="p-2">
      <a href={url}>{name}</a>
    </li>
  );
};

export default DropdownMenuItem;
