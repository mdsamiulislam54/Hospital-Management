import React from "react";
import { FaPaperPlane } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <div className="w-full m text-center md:text-left space-y-4 lg:flex justify-between border-b pb-5 border-gray-400">
               <div >
                 <h2 className="text-3xl font-bold ">
                   Subscribe to Our Health Newsletter
                 </h2>
                 <p className=" text-sm">
                   Get the latest health tips, doctor updates, and medical news
                   straight to your inbox.
                 </p>
               </div>
   
               <form className="flex flex-col sm:flex-row items-center gap-4">
                 <input
                   type="email"
                   placeholder="Enter your email"
                   className="p-3  w-full sm:w-auto flex-1 focus:outline-none border-b"
                 />
                 <button
                   type="submit"
                   className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 px-5 py-3 rounded-lg transition "
                 >
                   <FaPaperPlane />
                   Subscribe
                 </button>
               </form>
             </div>
  );
};

export default Newsletter;
