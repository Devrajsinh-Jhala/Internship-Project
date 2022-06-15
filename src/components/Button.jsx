import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Button = ({ background, textColor }) => {
  return (
    <button
      className={`{ w-[190px] text-center rounded-full  py-3 px-5 font-bold drop-shadow-[0_6px_6px_rgba(0,0,0,0.30)] mt-[10px] mb-[10px] ${background} ${textColor} `}
    >
      <span className=" font-inter tracking-tight text-center flex flex-row justify-center items-center leading-6">
        Request Access{" "}
        <div className="pl-2 flex items-center justify-center">
          <FaArrowRight />
        </div>
      </span>
    </button>
  );
};

export default Button;
