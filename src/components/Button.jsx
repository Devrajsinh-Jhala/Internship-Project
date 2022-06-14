import React from "react";

const Button = ({ background, textColor }) => {
  return (
    <div>
      <button
        className={`{font-inter text-center rounded-full font-bold drop-shadow-[0_6px_6px_rgba(0,0,0,0.30)] mt-[10px] py-3 px-5 ${background} ${textColor} `}
      >
        <span className="text-center">Request Access →</span>
      </button>
    </div>
  );
};

export default Button;
