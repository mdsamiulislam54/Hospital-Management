import React from "react";
import { FaLinkedin, FaPaperPlane } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaUserDoctor,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaArrowRight,
} from "react-icons/fa6";
import Newsletter from "../NewsLetter/NewsLetter";

const Footer = () => {
  return (
    <div className="pt-20 bg-white px-4 z-100 ">
      <div>
        <div>
         <Newsletter/>
        </div>
        <div className="lg:flex justify-between py-5">
          <div>
            <div className="flex items-center gap-3">
              <FaUserDoctor size={24} className=" text-white font-bold " />{" "}
              <span className="font-semibold sm:text-xl text-white">
                DocBook BD
              </span>
            </div>
            <p className="mb-4">
              We are a trusted doctor booking platform, <br></br> connecting patients with
              the best healthcare professionals
            </p>
            <ul className="flex items-center gap-2">
              <FaFacebook size={24} color="blue" />
              <FaInstagram size={24} color="red" />
              <FaYoutube size={24} color="red"  />
              <FaLinkedin size={24} color="blue"  />
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-3 text-gray-300 flex gap-5 ">
            <span>
            <li className=" text-gray-800 flex items-center gap-2 cursor-pointer hover:text-blue-400">
                 Home
              </li>
              <li className=" text-gray-800 flex items-center gap-2 cursor-pointer hover:text-blue-400">
                About Us
              </li>
              <li className=" text-gray-800 flex items-center gap-2 cursor-pointer hover:text-blue-400">
                Services
              </li>
            </span>
             <span>
             <li className=" text-gray-800 flex items-center gap-2 cursor-pointer hover:text-blue-400">
                 Trams and Policy
              </li>
              <li className=" text-gray-800 flex items-center gap-2 cursor-pointer hover:text-blue-400">
                 All Doctor
              </li>
              <li className=" text-gray-800 flex items-center gap-2 cursor-pointer hover:text-blue-400">
                Appointment
              </li>
           
             </span>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Address</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <FaLocationDot /> Rangpur Sadar, Dhaka, Bangladesh
              </li>
              <li className="flex items-center gap-3">
                <FaPhone /> +880 1234 567890
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope /> support@docbookbd.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" py-4 text-center text-gray-800 text-sm bg-blue-50">
          © {new Date().getFullYear()} DocBook BD. All rights reserved.
        </div>
    </div>
  );
};

export default Footer;
