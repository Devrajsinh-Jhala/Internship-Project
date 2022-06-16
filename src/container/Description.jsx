import React from "react";
import DescriptiveBlocks from "../components/DescriptiveBlocks";
import Banner1 from "../assets/Banner 1 Logo.png";
import Banner2 from "../assets/Banner 2 Logo.png";
import Banner3 from "../assets/Banner 3 Logo.png";
import Banner4 from "../assets/Banner 4 Logo.png";
import Skeleton2 from "../assets/SKELETON 2.png";

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="mt-[77px] mb-[10px] md:mb-[50px] text-center w-full">
        <span className="text-[23px] font-inter font-bold"></span>
      </h3>

      <DescriptiveBlocks
        subHeading={""}
        Heading={"Go live with languify"}
        Testimoney={
          "Get immediate nudges in the form of Languify tags during the meeting, and additional detailed tags in meeting summaries at the end."
        }
        Testimoney2={
          "Monitor your improvement in real time with the help of increment and decrement percentage of various categories score"
        }
        bannnerImage={Skeleton2}
      />
      <DescriptiveBlocks
        subHeading={""}
        Heading={"Track, Learn, Improvise"}
        Testimoney={
          "Languify extension works where you do, seamless integration with your browser."
        }
        Testimoney2={
          "Track your performace using previous conversations. Increase your languify score by improving on different speech parameters."
        }
        bannnerImage={Skeleton2}
      />
    </div>
  );
};

export default Description;
