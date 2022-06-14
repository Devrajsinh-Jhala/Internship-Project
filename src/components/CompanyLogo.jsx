import React from "react";
import teenly from "../assets/teenly.png";

const CompanyLogo = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="p-8">
        <p className="p-8">
          <span></span>
        </p>
      </div>
      <div>
        <img
          className="w-32 h-[52px] cursor-pointer hover:-translate-y-3 ease-in-out duration-300"
          src={teenly}
          alt="Company Logo"
        />
      </div>
    </div>
  );
};

export default CompanyLogo;
