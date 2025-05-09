import { HiPlusSm } from "react-icons/hi";
import { MdNotificationsActive } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { handleToggleMenu } from "../../Redux/Store/ReduxSlice/ToggleMenuSlice";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const dispatch = useDispatch();


  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center  gap-2">
          <div className="cursor-pointer">
            <TfiMenuAlt
              size={24}
              color="white"
              onClick={() => dispatch(handleToggleMenu())}
            />
          </div>
          <div className="flex items-center gap-3">
            <FaUserDoctor color="white" size={24} className=" text-blue-500 font-bold " />{" "}
            <span className="font-semibold sm:text-xl text-white">DocBook BD</span>
          </div>
        </div>
        <div className="flex items-center  gap-5">
          <div className="flex items-center gap-3">
            <MdNotificationsActive className="sm:text-3xl" />
          </div>

          <button className="btn  bg-blue-500 text-white font-semibold sm:text-lg">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
