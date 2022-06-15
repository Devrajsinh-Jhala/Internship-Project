import React from "react";
import BrandLogo from "../components/BrandLogo";
import Google from "../assets/Google Logo.png";
import UpNext from "../assets/Up Next Logo.png";
import MartiLogo from "../assets/Marti Logo.png";
import HikreSchool from "../assets/hikre school logo.png";
import Sandboxph from "../assets/SANDBOXPH logo.png";
import WG from "../assets/WG Co. Logo.png";
import HeaderImage from "../assets/Header Image.png";

const Banner = () => {
  return (
    <div className="px-5 py-6 mt-4 flex flex-col items-center justify-center">
      <p className="py-2 text-[13px] text-[#6b6f76] text-center font-inter md:w-[700px]">
        Teemly freelancers and agencies have worked together with these fast
        growing companies
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center">
        <BrandLogo image={Google} />
        <BrandLogo image={UpNext} />
        <BrandLogo image={MartiLogo} />
        <BrandLogo image={HikreSchool} />
        <BrandLogo image={Sandboxph} />
        <BrandLogo image={WG} />
      </div>

      <img
        className="px-5 py-6 object-contain"
        src={HeaderImage}
        alt={HeaderImage}
      />
    </div>
  );
};

export default Banner;
