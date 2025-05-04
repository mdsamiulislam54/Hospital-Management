
import { MdDriveFileRenameOutline } from "react-icons/md";
import { Link } from "react-router";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { createUser } from "../../Redux/Store/ReduxSlice/UserSlice";
import { useState } from "react";

const Registration = () => {
  const [ispassword,setIsPassword] = useState(false)

  const dispatch = useDispatch()
  const handleCreateUserWithEmailAndPassword = e =>{
    e.preventDefault()
  

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    dispatch(createUser({name, phone, email, password }))
    e.target.reset()

  } 
  return (
    <div>
      <div className="h-screen xl:ml-62 px-4 flex flex-col justify-center items-center">
        <form
        onSubmit={handleCreateUserWithEmailAndPassword}
        
          action=""
          className="flex flex-col gap-3 w-5/12 mx-auto shadow-lg p-4 shadow-gray-100"
        >
          <p className="mb-4 text-xl font-semibold text-white text-center">
            Sign Up
          </p>
       
        <input
            type="text"
            name="name"
            required
            placeholder="Enter Your Name"
            className="w-full border-b p-2 text-white outline-none"
          />
 
          <input
            type="number"
            name="phone"
            required
            placeholder="Enter Your Phone Number..."
            className="w-full border-b p-2 text-white outline-none"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Enter Your Email"
            className="w-full border-b p-2 text-white outline-none"
          />
          <span className="relative">
          <input
            type={ispassword ? "text":"password"}
            name="password"
            required
            placeholder="Enter Your Password"
            className="w-full border-b p-2 text-white outline-none"
          />
          <span className="absolute top-3 right-0 text-white" onClick={()=>setIsPassword(!ispassword)}>
            {
              ispassword ? <FaRegEye />:<FaRegEyeSlash />
            }
          </span>
          </span>
          <input
            type="submit"
            value="Sign Up"
            className="w-full my-4 p-2 text-white btn btn-outline hover:bg-white hover:text-black transition-all duration-500 "
          />
          <p className="text-center text-xl font-semibold my-4 text-white">Or</p>

          <div>
            <p className="text-center text-white">
              Already have an account please ?{" "}
              <Link to={"/login"} className="underline text-green-300">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
