
import { HiPlusSm } from "react-icons/hi";
import { MdNotificationsActive } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { handleToggleMenu } from "../../Redux/Store/ReduxSlice/ToggleMenuSlice";


const Navbar = () => {
    const dispatch = useDispatch();
    
   
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center  gap-2">
          <div className="" >
            <label className="btn btn-circle swap swap-rotate" >
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                onClick={()=>dispatch(handleToggleMenu())}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>

          
          </div>
         <div className="flex items-center gap-3">
         <FaUserDoctor size={24} className=" text-blue-500 font-bold " />{" "}
         <span className="font-semibold text-xl">DocBook BD</span>
         </div>
        </div>
        <div className="flex items-center  gap-5">
          <div className="flex items-center gap-3">
          
            <MdNotificationsActive size={32} />
          </div>

          <button className="btn  bg-blue-500 text-white font-semibold text-lg">
            Login
          </button>

         
        </div>
      </div>
    </>
  );
};

export default Navbar;
