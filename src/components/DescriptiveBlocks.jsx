import React from "react";
import Button from "./Button";

const DescriptiveBlocks = ({
  subHeading,
  Heading,
  Testimoney,
  Testimoney2,
  bannnerImage,
}) => {
  return (
    <div className="flex px-7 py-5 flex-col md:flex-row justify-center font-inter mb-[50px] md:mb-[250px]">
      <div className="left md:w-[37%] px-4 flex flex-col items-start -mt-12 justify-center py-5 tracking-tighter">
        <span className="text-base font-inter tracking-normal font-bold text-skin-secondaryText">
          {subHeading}
        </span>
        <h2 className="w-full pb-4 leading-10 text-[30px] md:text-[36px] font-extrabold">
          {Heading}
        </h2>
        <div className="blockquote tracking-wide mb-6 mt-6 py-1 font-inter text-black pr-4">
          <span className="mt-2 py-2">
            <div className="mb-4">{Testimoney}</div>
            {Testimoney2}
          </span>
        </div>
        <Button
          background={"bg-skin-bgSecondary"}
          textColor={"text-skin-buttonText"}
        />
      </div>
      <div className="right px-4 py-5 md:max-w-[63%]">
        <img
          className=" w-full h-full md:w-[490px] md:h-[490px] object-contain"
          src={bannnerImage}
          alt={bannnerImage}
        />
      </div>
    </div>
  );
};

export default DescriptiveBlocks;
