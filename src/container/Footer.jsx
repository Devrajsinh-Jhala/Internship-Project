import React from "react";
import languify from "../assets/Group 1.svg";

const Footer = () => {
  return (
    <div className="flex flex-col items-start md:flex-row px-6 py-5 font-inter ">
      <div className="px-4 py-5 w-full flex flex-col md:w-[36%] ">
        <div className="flex flex-col justify-start w-full">
          <img
            className=" flex flex-col items-center justify-start w-[158px]"
            src={languify}
            alt={languify}
          />
        </div>
        <h3 className="py-2 font-inter font-bold text-2xl">Languify</h3>

        <p className=" py-4 text-[13px]">
          Copyright © 2022 | Made in India with ♡ from IITB alums | All rights
          reserved
        </p>
      </div>
      <div className="px-4 py-2 w-full  flex flex-col md:w-[36%]">
        <p className=" font-semibold">Company</p>

        <p className="py-2 text-[13px] text-[#6b6f76]">About us</p>
        <p className="py-2 text-[13px] text-[#6b6f76]">Partners</p>
        <p className="py-2 text-[13px] text-[#6b6f76]">Careers</p>
        <p className="py-2 text-[13px] text-[#6b6f76]">info@languify.in</p>
      </div>
      <div className="px-4 py-5 w-full md:w-[36%]">
        <p className="font-semibold">Social</p>
        <p className="py-2 text-[13px] text-[#6b6f76]">Instagram</p>
        <p className="py-2 text-[13px] text-[#6b6f76]">Facebook</p>
        <p className="py-2 text-[13px] text-[#6b6f76]">Linked In</p>
      </div>
    </div>
  );
};

export default Footer;
