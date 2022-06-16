import React from "react";
import BrandLogo from "../components/BrandLogo";
import Zoom from "../assets/zoom-logo-png.png";
import Teams from "../assets/Microsoft_Teams-Logo.wine.png";
import Skeleton from "../assets/SKELETON3.png";
import TeamsLogo from "../components/TeamsLogo";

const Banner = () => {
  return (
    <div className="px-5 py-6 mt-4 flex flex-col items-center justify-center">
      <p className="py-2 text-[13px] text-[#6b6f76] text-center font-inter md:w-[700px]">
        Launching soon on
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center">
        <BrandLogo image={Zoom} />
        <TeamsLogo image={Teams} />
      </div>

      <div className="flex justify-center items-center">
        <img src={Skeleton} alt={Skeleton} />
      </div>
    </div>
  );
};

export default Banner;
