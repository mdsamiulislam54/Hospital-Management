import React, { useState } from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { Link } from "react-router";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";


const Login = () => {
  const [ispassword, setIsPassword] = useState(false);
  return (
    <div className="h-screen xl:ml-62 px-4 flex flex-col justify-center items-center">
      <form
        action=""
        className="flex flex-col gap-3 w-5/12 mx-auto shadow-lg p-4 shadow-gray-100"
      >
        <caption className="mb-4 text-xl font-semibold text-white">
          Sign In
        </caption>

        <input
          type="email"
          name="email"
          required
          placeholder="Enter Your Email"
          className="w-full border-b p-2 text-white outline-none"
        />
        <span className="relative">
          <input
            type={ispassword ? "text" : "password"}
            name="password"
            required
            placeholder="Enter Your Password"
            className="w-full border-b p-2 text-white outline-none"
          />
          <span
            className="absolute top-3 right-0 text-white"
            onClick={() => setIsPassword(!ispassword)}
          >
            {ispassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </span>
        <input
          type="submit"
          value="Sign In"
          className="w-full my-4 p-2 text-white btn btn-outline hover:bg-white hover:text-black transition-all duration-500 "
        />
        <caption className="text-white text-xl font-bold">Or</caption>
        <div className="flex justify-center items-center flex-col gap-4">
          <button className="btn bg-white text-black border-[#e5e5e5] btn-block">
            <FcGoogle size={24} />
            Sing In with Google
          </button>

          <button className="btn bg-white text-black border-[#e5e5e5] btn-block">
            <IoPhonePortraitOutline size={24} />
            Sing In with Phone
          </button>
        </div>
        <div>
          <p className="text-center text-white">
            Don't have an account please ?{" "}
            <Link to={"/registration"} className="underline text-green-300">
              create account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
