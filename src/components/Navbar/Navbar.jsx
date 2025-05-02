import React from "react";
import { HiPlusSm } from "react-icons/hi";
import { MdNotificationsActive } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center">
          <FaUserDoctor size={24} className=" text-blue-500 font-bold " /> <span className="font-semibold text-xl">DocBook BD</span>
        </div>
        <div className="flex items-center gap-5">
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="bg-transparent outline-none" required placeholder="Search Doctor ..." />
          </label>
          <MdNotificationsActive size={32}/>

         <button className="btn  bg-blue-500 text-white font-semibold text-lg">Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
