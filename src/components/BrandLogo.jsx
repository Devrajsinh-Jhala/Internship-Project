import React from "react";

const BrandLogo = ({ image }) => {
  return (
    <div className="py-5 px-4">
      <img className={`w-[128px] h-[36px]`} src={image} alt={image} />
    </div>
  );
};

export default BrandLogo;
