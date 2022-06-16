import React from "react";
import { FaChevronDown } from "react-icons/fa";

const DropDown = () => {
  return (
    <div className="flex flex-col items-center justify-start mt-[50px] mb-[50px]">
      <div>
        <button
          className={`inline-flex items-center text-black font-inter
           justify-between w-[218px] rounded-md border border-gray-400 pl-[13px] h-[32px] py-[13px]`}
        >
          Heading 1
          <div className="px-2 flex items-center justify-center">
            <FaChevronDown />
          </div>
        </button>
      </div>
    </div>
  );
};

export default DropDown;
