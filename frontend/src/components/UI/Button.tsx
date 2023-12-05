import React from "react";
import { Link } from "react-router-dom";

//DODAC FUNKCJE PRZEKIEROWANIA Z URL
const Button: React.FC<{
  label: string;
  classes?: string;
  size: string;
  url?: string;
}> = ({ label, classes, size, url }) => {
  // IF SIZE THEN DIFFERENT SIZE
  // if(size === 'small'){
  // }
  return (
    <Link to={url || ""}>
      <button
        className={`flex w-full h-full items-center justify-center ${classes}`}
      >
        {label}
      </button>
    </Link>
  );
};

export default Button;
