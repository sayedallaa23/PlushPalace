import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import { GiIndianPalace } from "react-icons/gi";
function Navbar() {
  const hamref = React.useRef(null);
  function handleHamMenu() {
    if (hamref.current.style.display === "block") {
      hamref.current.style.display = "none";
    } else {
      hamref.current.style.display = "block";
    }
  }
  return (
    <div>
      <nav className="flex font-[300] justify-between items-center py-[2rem] px-[2rem] md:px-[4rem] text-[#cacaca] ">
        <div className="flex items-center justify-between gap-2">
          <div>
            <GiIndianPalace className="text-[#F3AA1C] text-[1.5rem] " />
          </div>
          <div>PlushPalace</div>
        </div>
        <div className="gap-[1.5rem] items-center hidden lg:flex">
          <HashLink to="/#header" className="hover:text-[#F0F3F3]">
            Home
          </HashLink>
          <HashLink to="/#services" className="hover:text-[#F0F3F3]">
            Services
          </HashLink>
          <HashLink to="/#about" className="hover:text-[#F0F3F3]">
            About Us
          </HashLink>
          <HashLink to="/#footer-links" className="hover:text-[#F0F3F3]">
            Contact Us
          </HashLink>
        </div>
        <HashLink to={"/#most-selling"} className="hover:text-[#F0F3F3] hidden lg:flex">
          Best Selling
        </HashLink>
        <div className="rounded-[10px] border-[2px] border-[#262626] bg-[#1A1A1A] p-2 lg:hidden">
          <HiOutlineMenuAlt3
            onClick={() => {
              handleHamMenu();
            }}
          />
        </div>
        <div
          className="ham-menu fixed left-0 top-0 z-[99] hidden h-[100vh] w-[100vw] bg-[#000000] p-[3rem]"
          ref={hamref}
        >
          <div className="flex flex-col items-center gap-10">
            <div className="self-end">
              <FaXmark
                className="text-[30px] text-white"
                onClick={() => {
                  handleHamMenu();
                }}
              />
            </div>
            <div className="flex flex-col self-center gap-6 my-auto text-center h-[100%]">
              <HashLink
                to="/#header"
                className="hover:text-[#F0F3F3]"
                onClick={() => {
                  handleHamMenu();
                }}
              >
                Home
              </HashLink>
              <HashLink
                to="/#services"
                className="hover:text-[#F0F3F3]"
                onClick={() => {
                  handleHamMenu();
                }}
              >
                Services
              </HashLink>
              <HashLink
                to="/#about"
                className="hover:text-[#F0F3F3]"
                onClick={() => {
                  handleHamMenu();
                }}
              >
                About Us
              </HashLink>
              <HashLink
                to="/#footer-links"
                className="hover:text-[#F0F3F3]"
                onClick={() => {
                  handleHamMenu();
                }}
              >
                Contact Us
              </HashLink>
              <HashLink
                to={"/"}
                className="hover:text-[#F0F3F3] hidden md:flex"
                onClick={() => {
                  handleHamMenu();
                }}
              >
                Best Selling
              </HashLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
