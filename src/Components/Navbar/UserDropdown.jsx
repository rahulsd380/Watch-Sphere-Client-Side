import { TbLogout2 } from "react-icons/tb";
import { BiLogIn } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UserDropdown = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);
  const handleLogout = () => {
    logout()
      .then((result) => {
        console.log(result.user);
        navigate("/signin");
      })
      .then((error) => {
        console.log(error);
      });
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left z-20">
      <button
        type="button"
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium "
        onClick={toggleDropdown}
      >
        <div className="text-gray-300 flex items-center gap-1 font-semibold hover:text-blue-400 transition duration-300 text-base">
          <FaRegUser></FaRegUser>
          <IoIosArrowDown></IoIosArrowDown>
        </div>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute -right-14 mt-2 w-56 rounded-md shadow-lg bg-gray-800 transition duration-300 opacity-100 border-2 border-blue-500">
          <div className="flex flex-col px-4">
            <div className="flex justify-center border-b-2 border-blue-400 pb-2 mt-5">
              <div>
                <div className="flex justify-center">
                      <FaUserCircle className="text-5xl mb-2 text-blue-500"></FaUserCircle>
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  {user?.displayName}
                </h1>
              </div>
            </div>

            <Link
              className="hover:text-blue-400 transition duration-300 text-gray-300 font-semibold mt-7 mb-2 border-b border-blue-900 pb-1"
            >
              Dashboard
            </Link>

            <Link
              className="hover:text-blue-400 transition duration-300 text-gray-300 font-semibold mb-2 border-b border-blue-900 pb-1"
            >
              View Profile
            </Link>

            <Link
              className="hover:text-blue-400 transition duration-300 text-gray-300 font-semibold mb-2 border-b border-blue-900 pb-1"
            >
              Help Center
            </Link>

            {user ? (
              <Link
                onClick={handleLogout}
                className="text-blue-400 hover:text-blue-400 transition duration-300 mb-4 text-base font-semibold flex items-center gap-3"
              >
                Logout <TbLogout2 className="text-xl"></TbLogout2>
              </Link>
            ) : (
              <Link
                to={"/signin"}
                className="text-blue-400 hover:text-blue-400 transition duration-300 mb-4 text-base font-semibold flex items-center gap-3"
              >
                Login <BiLogIn className="text-xl"></BiLogIn>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
