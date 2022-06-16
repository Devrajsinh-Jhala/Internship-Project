import React from "react";

const NewsContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="px-7 py-5 md:w-[800px] font-inter mb-5">
        <div className=" leading-5 px-7 py-5 rounded-sm bg-slate-50 drop-shadow-[0_6px_6px_rgba(0,0,0,0.30)]">
          <p className="py-2 font-bold">
            <span className="cursor-pointer">
              Languify raises a pre-seed round
            </span>
          </p>
          <p className="py-1 text-[13px]">
            <span>
              {" "}
              Languify raised a pre-seed round from Titan Capital represented by
              Kunal Bahl & Rohit Bansal (Snapdeal founders), Smile group, Goel
              family fund, CIIE ,and other 8 notable angels.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsContainer;
