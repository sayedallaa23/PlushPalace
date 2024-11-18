import React from "react";
import { FocusCardsDemo } from "./FocusCardsDemo";

function ServicesSection() {
  return (
    <div className="my-[4rem]" id="services">
      <div className="font-semibold leading-none text-center bree-serif mb-[2rem]">
        <h2 className="text-[#F3AA1C]">are the best</h2>
        <h2 className="text-[2rem]">Our Services</h2>
      </div>
      <FocusCardsDemo />
    </div>
  );
}

export default ServicesSection;
