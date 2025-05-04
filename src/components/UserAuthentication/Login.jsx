import React from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { Link } from "react-router";

const Login = () => {
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
          type="text"
          placeholder="Enter Your Email"
          className="w-full border-b p-2 text-white outline-none"
        />
        <input
          type="text"
          placeholder="Enter Your Email"
          className="w-full border-b p-2 text-white outline-none"
        />
        <input
          type="submit"
          value="Sign In"
          className="w-full my-4 p-2 text-white btn btn-outline hover:bg-white hover:text-black transition-all duration-500 "
        />
        <caption>Or</caption>
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
          <p className="text-center">
            Don't have a account please ? <Link className="underline text-green-300">create account</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
