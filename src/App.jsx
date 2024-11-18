import React, { useContext, useEffect, useRef, useState } from "react";
import MostSelling from "./components/MostSelling";
import Header from "./components/Header";
import RoomSection from "./components/RoomSection";
import ServicesSection from "./components/ServicesSection";
import AboutSec from "./components/AboutSec";
import Footer from "./components/Footer";
export const App = () => (
  <div className="bg-[#f0F3F3]">
    <Header />
    <ServicesSection/>
    <RoomSection />
    <div className="bg-[#F0F3F3] text-center flex justify-center items-end">
      <h1 className= "text-[2.5rem] md:text-[4rem] lg:text-[5rem] mt-[6rem] font-bold text-[#2A2D38] uppercase">Our Best Selling</h1>
    </div>
    <MostSelling />
    
    <AboutSec/>
    <Footer/>
  </div>
);
