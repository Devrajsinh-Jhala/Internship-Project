import React from "react";
import languify from "../assets/Group 1.svg";

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
          className="w-[192px] h-[82px] cursor-pointer hover:-translate-y-3 ease-in-out duration-300"
          src={languify}
          alt="Company Logo"
        />
      </div>
    </div>
  );
};

export default CompanyLogo;
