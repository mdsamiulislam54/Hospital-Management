import React, { useState } from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { Link } from "react-router";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { signInWithGoogle } from "../../Redux/Store/ReduxSlice/UserSlice";



const Login = () => {
  const [ispassword, setIsPassword] = useState(false);
  const { user, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  console.log(user)

  const handleGoogleSignIn = () => {
    dispatch(signInWithGoogle());
  };



  return (
    <div className="h-screen xl:ml-62 px-4 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-3 w-5/12 mx-auto shadow-lg p-4 shadow-gray-100">
      <form
        action=""
        
      >
        <p className="mb-4 text-xl font-semibold text-white text-center">
          Sign In
         
        </p>

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
        <span>
          <p className="text-sm font-bold text-white cursor-pointer text-end hover:text-green-300 transition-all duration-500">Forget password ?</p>
        </span>
        <input
          type="submit"
          value="Sign In"
          className="w-full my-4 p-2 text-white btn btn-outline hover:bg-white hover:text-black transition-all duration-500 "
        />
       
      </form>
      <p className="text-white text-xl font-bold text-center">Or</p>
        <div className="flex justify-center items-center flex-col gap-4">
          <button 
          onClick={handleGoogleSignIn}
          className="btn bg-white text-black border-[#e5e5e5] btn-block">
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
        </div>
    </div>
  );
};

export default Login;
