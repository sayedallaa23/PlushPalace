import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook ,FaTwitter , FaInstagram } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';

function Footer() {
  return (
    <div className="px-[2rem] pt-[4rem] pb-[1rem] md:px-[8rem] md:pt-[4rem] bg-[#252731] text-[#F0F3F3] mt-[10rem] footer"id="footer-links">
      <div className="flex flex-col justify-between lg:flex-row pb-[2rem] mb-[4rem] border-b-[1px] border-neutral-600">
        <div className="bree-serif">
          <h2 className="text-[2rem]">Get a Free Counsultancy Right Now</h2>
          <h3 className="hidden md:block text-[#b5b5b5]">
            We help you choose best furniture for your home
          </h3>
        </div>
        <button className="bg-[#F3AA1C] px-[3rem] h-fit py-[1rem] rounded-[30px] font-bold hover:opacity-80 mt-[2rem] lg:mt-0">
          Get in Touch
        </button>
      </div>
      <div>
        <div className="flex flex-col flex-wrap gap-3 md:flex-nowrap lg:flex-row lg:gap-0">
          <div className="flex flex-col gap-3 w-[100%] lg:w-[25%] mr-[2rem]">
            <h4>Quick Links</h4>
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-3">
                <HashLink to="/#header">Home</HashLink>
                <HashLink to="/#services">Services</HashLink>
                <HashLink to="/#about">About Us</HashLink>
                <HashLink to="/#footer-links">Contact Us</HashLink>
              </div>
              <div className="h-[20vh] bg-neutral-600 w-[1px] hidden lg:flex"></div>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-[100%] lg:w-[25%] mr-[2rem]">
            <h4>Contact Us</h4>
            <div  className="flex items-start justify-between">
              <div className="flex flex-col gap-3">
                <p>
                  Email : <span>example@mail.com</span>
                </p>
                <p>
                  Address : <span>29 street,chicago</span>
                </p>
                <p>
                  Phone : <span>+5 234 234 33 66</span>
                </p>
              </div>
              <div className="h-[20vh] bg-neutral-600 w-[1px] hidden lg:flex"></div>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-[100%] lg:w-[25%] mr-[2rem]">
            <h4>Social Media</h4>
            <div className="flex items-start justify-between">
            <div className="flex items-start justify-start gap-3">
              <Link><FaFacebook  className="text-[2rem]"/></Link>
              <Link><FaTwitter  className="text-[2rem]"/></Link>
              <Link><FaInstagram  className="text-[2rem]"/></Link>
            </div>
            <div className="h-[20vh] bg-neutral-600 w-[1px] hidden lg:flex"></div>

                
            </div>

          </div>
          <div className="flex-col gap-3 w-[100%] lg:w-[25%] hidden md:flex">
            <h4>Location</h4>
            <div>map</div>
          </div>
        </div>
        <div className="flex justify-between w-[100%] lg:w-[50%] mt-[2rem] font-thin text-[.9rem]">
          <Link to="/">Terms and Conditions</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Cockies Policy</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
