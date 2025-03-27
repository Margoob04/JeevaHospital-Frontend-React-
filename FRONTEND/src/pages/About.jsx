import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      {/* Heading */}
      <div className="text-center text-xl sm:text-2xl pt-8 sm:pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      {/* Image and Text Section */}
      <div className="my-8 sm:my-10 flex flex-col md:flex-row gap-8 sm:gap-12">
        <img
          className="w-full md:max-w-[360px] max-h-60 sm:max-h-80 object-contain"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-4 sm:gap-6 md:w-2/4 text-xs sm:text-sm text-gray-600">
          <p>
            Welcome to Jeeva Hospital, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Jeeva Hospital is committed to excellence in healthcare technology.
            We continuously strive to enhance our platform, integrating the
            latest advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Jeeva Hospital is here to support you every step of
            the way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at Jeeva Hospital is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="text-lg sm:text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-12 sm:mb-20">
       
        <div className="border px-8 sm:px-10 md:px-16 py-6 sm:py-8 md:py-16 flex flex-col gap-4 sm:gap-5 text-[13px] sm:text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer group">
          <b className="group-hover:text-white">EFFICIENCY:</b>
          <p>
            Streamlined appointment scheduling <br />
            that fits into your busy lifestyle.
          </p>
        </div>

      
        <div className="border px-8 sm:px-10 md:px-16 py-6 sm:py-8 md:py-16 flex flex-col gap-4 sm:gap-5 text-[13px] sm:text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer group">
          <b className="group-hover:text-white">CONVENIENCE:</b>
          <p>
            Access to a network of trusted <br /> healthcare professionals in
            your area.
          </p>
        </div>

     
        <div className="border px-8 sm:px-10 md:px-16 py-6 sm:py-8 md:py-16 flex flex-col gap-4 sm:gap-5 text-[13px] sm:text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer group">
          <b className="group-hover:text-white">PERSONALIZATION:</b>
          <p>
            Tailored recommendations and reminders <br /> to help you stay on
            top of your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;