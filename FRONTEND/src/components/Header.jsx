import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex  flex-col  md:flex-row flex-wrap bg-primary px-8 md:px-10 lg:px-20 rounded-lg">
      {/*.. left side................... */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[30px]">
        <p className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-tight">
        Book Appointment <br />With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row  items-center gap-3 text-white text-sm font-light">
            <img className="w-28" src={assets.group_profiles} alt="" />
            <p className="">simply browse through our extensive list of trusted doctors,<br className="hidden  sm:block" /> 
            schedule your appointment hassle-free.</p>
        </div>
        <a href="#speciality" className="flex items-center gap-2 bg-white py-3 px-8 text-gray-600 text-sm m-auto md:m-0 rounded-full hover:scale-105  transition-all duration-300">
        Book Appointment  <img  className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* ..........right side.............. */}
      <div className="md:w-1/2 relative">
        <img className="w-full md:absolute bottom-0 h-auto rounded-lg" src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
