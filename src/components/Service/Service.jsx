import React from "react";
import { FaUserMd } from "react-icons/fa";
import { FaStethoscope,  FaNotesMedical, FaVideo, FaFileMedical, FaHospital } from "react-icons/fa6";

const Service = () => {
  return (
    <div className="my-16 px-4 md:px-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-100 mb-3">Our Services</h2>
        <p className="text-gray-100">We provide essential healthcare services to simplify your life.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Card 1 */}
        <div className="bg-white/30 rounded-xl p-6 shadow-lg hover:scale-105 transition">
          <div className="text-blue-600 text-4xl mb-4">
            <FaStethoscope />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-100">Book a Doctor</h3>
          <p className="text-gray-100 mb-4">Book an appointment with your preferred doctor in just a few clicks.</p>
          <button className=" btn btn-outline text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-all duration-500">Book Now</button>
        </div>
        
        {/* Service Card 2 */}
        <div className="bg-white/30 rounded-xl p-6 shadow-lg hover:scale-105 transition">
          <div className="text-blue-600 text-4xl mb-4">
            <FaUserMd />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-100">Doctor Profile Add</h3>
          <p className="text-gray-100 mb-4">Doctors can create and manage their online profiles and schedules.</p>
          <button className="btn btn-outline  hover:bg-white hover:text-black transition-all duration-500 text-white px-4 py-2 rounded ">Get Started</button>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white/30 rounded-xl p-6 shadow-lg hover:scale-105 transition">
          <div className="text-blue-600 text-4xl mb-4">
            <FaNotesMedical />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-100">Symptom Based Suggestion</h3>
          <p className="text-gray-100 mb-4">Share your symptoms and get recommended doctors instantly.</p>
          <button className=" text-white px-4 py-2 rounded btn btn-outline  hover:bg-white hover:text-black transition-all duration-500">Get Suggestion</button>
        </div>

        {/* Service Card 4 */}
        <div className="bg-white/30 rounded-xl p-6 shadow-lg hover:scale-105 transition">
          <div className="text-blue-600 text-4xl mb-4">
            <FaVideo />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-100">Video Consultation</h3>
          <p className="text-gray-100 mb-4">Consult with your doctor from home via secure video call.</p>
          <button className=" text-white px-4 py-2 rounded btn btn-outline  hover:bg-white hover:text-black transition-all duration-500">Start Now</button>
        </div>

        {/* Service Card 5 */}
        <div className="bg-white/30 rounded-xl p-6 shadow-lg hover:scale-105 transition">
          <div className="text-blue-600 text-4xl mb-4">
            <FaFileMedical />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-100">Upload Reports</h3>
          <p className="text-gray-100 mb-4">Upload prescriptions and health reports for doctor review.</p>
          <button className=" text-white px-4 py-2 rounded btn btn-outline  hover:bg-white hover:text-black transition-all duration-500">Upload Now</button>
        </div>

        {/* Service Card 6 */}
        <div className="bg-white/30 rounded-xl p-6 shadow-lg hover:scale-105 transition">
          <div className="text-blue-600 text-4xl mb-4">
            <FaHospital />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-100">Find Nearby Hospitals</h3>
          <p className="text-gray-100 mb-4">Search for hospitals and clinics near your location.</p>
          <button className=" text-white px-4 py-2 rounded btn btn-outline  hover:bg-white hover:text-black transition-all duration-500 ">Search Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
