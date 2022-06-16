import React from "react";

const InputElement = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[50px] mb-[50px]">
      <div>
        <input
          className="w-[400px] font-inter pl-[20px] border border-gray-400 rounded-lg  focus:outline-none py-[20px] h-[50px] "
          type="email"
          name="email"
          placeholder="Email Address"
        />
      </div>
    </div>
  );
};

export default InputElement;
