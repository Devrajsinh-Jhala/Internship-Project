import React from "react";
import Button from "./Button";

const DescriptiveBlocks = ({
  subHeading,
  Heading,
  Testimoney,
  authorName,
  bannnerImage,
}) => {
  return (
    <div className="flex px-7 py-5 flex-col md:flex-row justify-center font-inter mb-[50px] md:mb-[250px]">
      <div className="left md:w-[37%] px-4 flex flex-col items-start justify-center py-5 tracking-tighter">
        <span className="text-base text-skin-secondaryText font-bold">
          {subHeading}
        </span>
        <h2 className="w-full py-4 text-[30px] md:text-[36px] font-extrabold">
          {Heading}
        </h2>
        <Button
          background={"bg-skin-bgSecondary"}
          textColor={"text-skin-buttonText"}
        />
        <div className="blockquote mt-6 py-1 pl-2 pr-4">
          <span className="mt-2">
            {Testimoney} <b>{authorName}</b>
          </span>
        </div>
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
