import { Circles } from "react-loader-spinner";

interface SpinnerProps {
  message: string;
}

const Spinner: React.FC<SpinnerProps> = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full m-5">
      <Circles
        height="50"
        width="200"
        color="teal"
        ariaLabel="circles-loading"
      />
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
};

export default Spinner;
