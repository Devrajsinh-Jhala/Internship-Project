import React from "react";

const MediaDiv = () => {
  return (
    <div className="bg-skin-bgSecondary font-inter font-medium">
      <div className="w-full h-12 font-normal flex items-center justify-center">
        <p className="text-skin-buttonText text-center">
          Teemly is #buildinginpublic in
          <span className="text-skin-buttonText pl-1 underline hover:text-black cursor-pointer">
            Twitter
          </span>{" "}
          🚀
        </p>
      </div>
    </div>
  );
};

export default MediaDiv;
