import React from "react";
import teenly from "../assets/teenly.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-start md:flex-row px-6 py-5 font-inter ">
      <div className="px-4 py-5 w-full flex flex-col md:w-[36%] ">
        <div className="flex flex-col ">
          <img className="w-32" src={teenly} alt={teenly} />
        </div>
        <h3 className="py-3 font-inter font-bold text-2xl">Teemly</h3>
        <p className="py-2">Streamlined Client Project Toolkit</p>
        <p className="py-4 text-[13px]">
          Copyright © 2022 | Made with ❤️ in Manila | All rights reserved
        </p>
      </div>
      <div className="px-4 py-5 w-full  flex flex-col md:w-[36%]">
        <p className="py-2 font-semibold">Company</p>
        <p className="py-2 text-[13px] text-[#6b6f76]">Home</p>
        <p className="py-2 text-[13px] text-[#6b6f76]">Waitlist</p>
        <p className="py-2 text-[13px] text-[#6b6f76]">Twitter</p>
        <p className="py-2 text-[13px] text-[#6b6f76]">hello@teenly.io</p>
      </div>
      <div className="px-4 py-5 w-full md:w-[36%]">
        <p className="py-2 font-semibold">Legal</p>
        <p className="py-2 text-[13px] text-[#6b6f76]">Terms of Service</p>
        <p className="py-2 text-[13px] text-[#6b6f76]">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
