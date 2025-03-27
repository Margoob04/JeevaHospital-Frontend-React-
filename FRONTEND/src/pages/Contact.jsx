import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-xl sm:text-2xl pt-8 sm:pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        {/* Right side image */}
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR HOSPITAL</p>
          <p className="text-gray-500">
            Bahadurpur Gumti, Mulchand Path, <br />
            Kankarbagh, Patna - 8000020
          </p>
          <p className="text-gray-500">
            0612-3188988 +91-7759030303 <br />
            jeevahospital@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600">
            CAREERS AT JEEVA HOSPITAL
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-3 text-sm hover:bg-black hover:text-white  transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
