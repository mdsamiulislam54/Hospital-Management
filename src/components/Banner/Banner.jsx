import React from "react";
import Doctor from "../../assets/7317129.jpg";
import { TypeAnimation } from "react-type-animation";
import Marquee from "react-fast-marquee";
const Banner = () => {
  return (
    <div
      className=" h-screen bg-cover bg-no-repeat relative z-30 "
      style={{ backgroundImage: `url(${Doctor})` }}
    >
      <div className="absolute inset-0 w-full h-full bg-blue-500/90 -z-10"></div>
      <div>
        <Marquee
          pauseOnHover
          gradient={false}
          speed={60}
          className=" text-white py-2 bg-blue-400"
        >
          📢 Urgent Notice: Tomorrow the OPD will be closed for maintenance |
          Free Health Checkup Camp this Friday | Stay Safe, Stay Healthy ❤️
        </Marquee>
        <div className="flex items-center justify-center pt-[20%] z-30">
          <div className="text-center">
            <TypeAnimation
              sequence={[
                "Welcome to DocBook BD",
                2000,
                "Hospital Management System",
                2000,
                "Smart & Secure Solution",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-4xl lg:w-6xl font-bold text-white  mb-5 leading-15"
            ></TypeAnimation>

            <p className="text-lg text-gray-200 mb-5">
              Manage appointments, patient records, <br></br>and connect with
              your doctor easily.
            </p>
            <div className="space-x-4">
              <button className=" text-white px-5 py-2 rounded btn btn-outline hover:bg-white hover:text-black transition-all duration-300">
                Book Appointment
              </button>
              <button className="hover:bg-gray-100 text-white btn-outline btn text-blue-800 px-5 py-2 rounded">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
