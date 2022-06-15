import React from "react";
import DescriptiveBlocks from "../components/DescriptiveBlocks";
import Banner1 from "../assets/Banner 1 Logo.png";
import Banner2 from "../assets/Banner 2 Logo.png";
import Banner3 from "../assets/Banner 3 Logo.png";
import Banner4 from "../assets/Banner 4 Logo.png";

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="mt-[77px] mb-[10px] md:mb-[50px] text-center w-full">
        <span className="text-[23px] font-inter font-bold">
          How Teemly works
        </span>
      </h3>
      <DescriptiveBlocks
        subHeading={"Client Project Management"}
        Heading={"Whole project visibility in a personalized dashboard"}
        Testimoney={
          "I see using this not just for freelance/agency work but also for any project base case. "
        }
        authorName={" - Vince Alturas, Abstract"}
        bannnerImage={Banner1}
      />
      <DescriptiveBlocks
        subHeading={"Calendars"}
        Heading={"Use your calendar as a todo list and scheduling tool"}
        Testimoney={
          "As an ed-tech startup, Teemly as our scheduling software has made admissions scheduling a breeze! Great using an app that fits our team's needs. "
        }
        authorName={" - Javi Lorenzana, UpNext"}
        bannnerImage={Banner2}
      />
      <DescriptiveBlocks
        subHeading={"Collaboration"}
        Heading={"Send links to guests, clients and team mates with love"}
        Testimoney={
          "No need to experience back and forth. And this is just the beta, guys! Really looking forward to the full release."
        }
        authorName={"- Xyrenne Eustaquio, Makisu"}
        bannnerImage={Banner3}
      />
      <DescriptiveBlocks
        subHeading={"Workflow"}
        Heading={"Integrate easily with your everyday work and life"}
        Testimoney={
          "The team behind Teemly is very helpful to solve your collaboration issues. They are proactive to solve the remote work problems through integrations."
        }
        authorName={" - Waren Gonzaga, WGC Co."}
        bannnerImage={Banner4}
      />
    </div>
  );
};

export default Description;
