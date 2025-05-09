import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Root = () => {
  const isOpen = useSelector((state) => state.sideMenu.isOpen);
  
  return (
    <div>
      <nav className="xl:hidden max-xl:block py-4 shadow bg-gradient-to-r to-blue-50 relative">
        <div className="navbar_container w-10/12 mx-auto">
          <Navbar />
        </div>
      </nav>
      <main className="flex  relative overflow-hidden ">
        <motion.div
          initial={{ x: -350 }}
          animate={{x:isOpen ? -350:0}}
          transition={{duration:0.3, ease: "easeInOut"}}
          className={`w-70  xl:block bg-blue-500/85 h-full overflow-y-auto  z-100 ${
            isOpen ? "hidden" : "   absolute z-0"
          } `}
        >
          <Sidebar />
        </motion.div>
        <div className="flex-1 xl:ml-6 px-2 overflow-y-auto h-full">
          <Outlet />
        </div>
      </main>
      <footer className="z-100"><Footer/></footer>
    </div>
  );
};

export default Root;
