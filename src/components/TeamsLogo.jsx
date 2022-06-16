import React from "react";

const TeamsLogo = ({ image }) => {
  return (
    <div className="py-5 px-4">
      <img className="w-[200px]" src={image} alt={image} />
    </div>
  );
};

export default TeamsLogo;
