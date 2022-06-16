import React from "react";

const MediaDiv = () => {
  return (
    <div className="bg-skin-bgSecondary w-full font-inter font-medium">
      <div className="w-full h-full md:h-12 font-normal flex items-center justify-center">
        <p className="text-skin-buttonText text-center">
          Hooray! A newer version of our extension is now available on chrome
          store. Check out the new evaluation scenarios now!
          <span className="text-skin-buttonText pl-1 underline hover:text-black cursor-pointer">
            <a href="https://chrome.google.com/webstore/detail/languify/pfikgbfdjgabbhiladpmjcnahjoedknh?hl=en-GB">
              Chrome Extension
            </a>
          </span>{" "}
          🚀
        </p>
      </div>
    </div>
  );
};

export default MediaDiv;
