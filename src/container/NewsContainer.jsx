import React from "react";

const NewsContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="px-7 py-5 md:w-[800px] font-inter mb-5">
        <div className="px-7 py-5 rounded-sm bg-slate-50 drop-shadow-[0_6px_6px_rgba(0,0,0,0.30)]">
          <p className="py-2 font-bold">
            <span className="cursor-pointer">
              Coindesk - Bitcoin on longest weekly run in 9 months
            </span>
          </p>
          <p className="py-2 text-[13px]">
            <span>
              {" "}
              Aug 23 2021 - Bitcoin has chalked up an impressive rally ahead of
              the Federal Reserves annual economic symposium in Jackson Hole,
              Wyo., on Friday. Analysts...
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsContainer;
