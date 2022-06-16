import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // For showcasing input
  const [input, setInput] = useState("Select a source");

  return (
    <div className="flex flex-col items-center justify-start mt-[50px] mb-[50px]">
      <div>
        <button
          onClick={handleClick}
          className={`inline-flex items-center focus:border-2 focus:border-indigo-500 ${
            input !== "Select a source" ? "text-back" : "text-slate-400"
          } justify-between w-[400px] rounded-xl border border-gray-400 pl-[20px] h-[50px] py-[20px]`}
        >
          {input}
          <div className="px-6 flex items-center justify-center">
            <FaChevronDown />
          </div>
        </button>
        {/* Menu Button */}
        {isOpen && (
          <div className="origin-center absolute w-[400px] mt-2 rounded-md shadow-lg focus:outline-none font-inter ">
            <div
              onClick={() => {
                setInput("Twitter");
                setIsOpen(false);
              }}
              className="cursor-pointer hover:bg-slate-50 py-2 px-4 "
            >
              Twitter
            </div>
            <div
              onClick={() => {
                setInput("Instagram");
                setIsOpen(false);
              }}
              className="cursor-pointer hover:bg-slate-50 py-2 px-4 "
            >
              Instagram
            </div>
            <div
              onClick={() => {
                setInput("Google");
                setIsOpen(false);
              }}
              className="cursor-pointer hover:bg-slate-50 py-2 px-4 "
            >
              Google
            </div>
            <div
              onClick={() => {
                setInput("Product Hunt");
                setIsOpen(false);
              }}
              className="cursor-pointer hover:bg-slate-50 py-2 px-4 "
            >
              Product Hunt
            </div>
            <div
              onClick={() => {
                setInput("Friend / Referral");
                setIsOpen(false);
              }}
              className="cursor-pointer hover:bg-slate-50 py-2 px-4 "
            >
              Friend / Referral
            </div>
            <div
              onClick={() => {
                setInput("Other");
                setIsOpen(false);
              }}
              className="cursor-pointer hover:bg-slate-50 py-2 px-4 "
            >
              Other
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
