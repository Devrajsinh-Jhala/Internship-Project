import React from "react";
import Button from "../components/Button";
import CompanyLogo from "../components/CompanyLogo";
import MediaDiv from "../components/MediaDiv";

const Header = () => {
  return (
    <div>
      <MediaDiv />
      <div className="px-5 py-6  flex flex-col items-center text-center justify-center min-h-full max-w-full">
        <CompanyLogo />
        <h1 className="py-5 md:py-7 md:w-[700px] text-center tracking-tighter">
          <span className="font-extrabold text-5xl md:text-6xl font-inter">
            A one-stop shop for all your client projects
          </span>
        </h1>

        <p className="py-2 text-center font-inter md:w-[800px]">
          <span>
            It’s time for freelancing teams & agencies to focus on their work –
            generate leads, source proposals, manage contracts, track tasks,
            meetings, notes and soon invoices all in one place.
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
    </div>
  );
};

export default Header;
