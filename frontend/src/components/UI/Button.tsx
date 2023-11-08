import React from "react";

const Button: React.FC<{ desc: string; classes?: string }> = ({
  desc,
  classes,
}) => {
  return (
    <button
      className={`flex w-full h-full items-center justify-center ${classes}`}
    >
      {desc}
    </button>
  );
};

export default Button;
