import React from "react";
import Button from "../components/Button";
import CompanyLogo from "../components/CompanyLogo";
import MediaDiv from "../components/MediaDiv";
import NewsContainer from "./NewsContainer";

const Header = () => {
  return (
    <div>
      <div className="px-5 py-2  flex flex-col items-center text-center justify-center min-h-full max-w-full">
        <CompanyLogo />
        <h1 className="py-2 md:py-7 md:w-[700px] text-center ">
          <span className="tracking-tightest leading-tight font-extrabold text-[40px] md:text-[56px] font-inter">
            Improve with every interaction
          </span>
        </h1>

        <p className="py-2 tracking-wide text-center font-inter md:w-[800px]">
          <span>
            Languify’s AI helps you improve your English in real-time and
            suggests bite-sized learning plans to make you a better professional
          </span>
        </p>

        {/* Button */}
        <div>
          <Button
            background={"bg-skin-bgSecondary"}
            textColor={"text-skin-buttonText"}
          />
        </div>
      </div>
      <NewsContainer />
    </div>
  );
};

export default Header;
