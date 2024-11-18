import React from "react";
import Navbar from "./Navbar";


function Header() {
  return (
    <div className="relative bg-black h-[100vh]" id="header">
      <div className="z-[6] relative">
        <Navbar />
      </div>
      <div className="z-[5] relative w-[100%] text-[3rem] md:text-[4rem] mx-auto text-center font-[500] mt-[5rem]">
        <h1 className="text-[#d0d2d2] md:w-[60%] mx-auto">Elevate Your Space With Elegance</h1>
      </div>
      <img
        width={5000}
        height={5000}
        src={"/cover3.jpg"}
        alt=""
        className="z-[1] absolute top-0 w-screen h-[100vh] object-cover opacity-[0.9]"
      ></img>      
    </div>
  );
}

export default Header;
