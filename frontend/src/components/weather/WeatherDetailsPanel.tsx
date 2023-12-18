interface WeatherDetailsProps {
  desc: string;
  value: number;
  symbol: string;
  icon: string;
}

const WeatherDetailsPanel: React.FC<WeatherDetailsProps> = ({
  desc,
  value,
  symbol,
  icon,
}) => {
  const combinedClasses = `flex items-center justify-center p-2 text-2xl ${icon}`;

  return (
    <div className="w-full flex md:w-[calc(50%-16px)] p-4 justify-center shadow-md m-2 md:justify-evenly">
      <i className={combinedClasses}></i>
      <div className="flex flex-col justify-center items-center p-2">
        <p className="text-xl mx-auto md:mx-0">{desc}</p>
        <p>
          {value}
          {symbol}
        </p>
      </div>
    </div>
  );
};

export default WeatherDetailsPanel;
