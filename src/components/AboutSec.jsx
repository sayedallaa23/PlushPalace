import React from "react";
import AboutScene from "./AboutSecne";

function AboutSec() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-start justify-between bg-[#F0F3F3]" id="about">
      <div className="self-start mx-[3rem] mt-[4rem] md:w-[35vw]">
        <h1 className="text-[3rem] font-bold mb-[2rem] text-[#2A2D38]">
          About US
        </h1>
        <p className="text-[#969797]">
          Welcome to PlushPalace, where elegance meets comfort. We specialize in
          crafting and designing exquisite furniture tailored to your unique
          style. With a commitment to excellence and a passion for detail, our
          expert team ensures every piece tells a story of quality and
          sophistication. Experience unparalleled customer service as we
          transform your spaces into havens of luxury and tranquility. Discover
          the PlushPalace difference today.
        </p>
      </div>
      <div className="h-[25vh] md:h-[30vh] xl:h-[100vh] w-[100vw] md:w-[50vw]">
        <AboutScene />
      </div>
    </div>
  );
}

export default AboutSec;
