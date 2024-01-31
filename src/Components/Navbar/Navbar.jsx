import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import UserDropdown from "./UserDropdown";
import { IoIosArrowDown } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const [users, setUsers] = useState({});
  const url = `https://task-hub-connect-server.vercel.app/users?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => data.map((i) => setUsers(i)));
  }, [url]);

  return (
    <div className="px-5 shadow-lg border-b md:shadow-none md:border-none top-0 py-3">
      <div className="flex justify-between items-center gap-2">
        <div className="flex items-center gap-10">
          {/* <SideBarDrawer></SideBarDrawer> */}
          <div className="">
            <img
              className="w-32"
              src="https://i.ibb.co/w6FkzdF/logo.png"
              alt=""
            />
          </div>

          <div className="hidden md:flex md:items-center md:gap-8">
            <Link
              to={"/"}
              className="hover:text-blue-400 transition duration-300 text-gray-500 font-semibold "
            >
              Home
            </Link>
            <Link
              to={"/aboutUs"}
              className="hover:text-blue-400 transition duration-300 text-gray-500 font-semibold "
            >
              About Us
            </Link>

            <Link
              to={"/blogs"}
              className="hover:text-blue-400 transition duration-300 text-gray-500 font-semibold flex items-center gap-2"
            >
              Pricing Plans
              <IoIosArrowDown></IoIosArrowDown>
            </Link>
            <Link
              to="faq"
              className="hover:text-blue-400 transition duration-300 text-gray-500 font-semibold flex items-center gap-2"
            >
              Catagories
              <IoIosArrowDown></IoIosArrowDown>
            </Link>
          </div>
        </div>

        <div className="flex items-center">
            <div className="hidden md:flex gap-2">
              <div className="relative flex items-center">
              <IoIosSearch className="absolute text-3xl "></IoIosSearch>
                <input
                  name="text"
                  className="bg-white border border-gray-400 outline-none pl-7 py-2 rounded w-full"
                  type="text"
                  placeholder="Movies, Series"
                />
              </div>
              <div className="flex items-center text-gray-500">
                <GrLanguage className="text-xl"></GrLanguage>
                <select>
                  <option value="eng">Eng</option>
                  <option value="ban">Ban</option>
                  <option value="chi">Chi</option>
                </select>


                <div>
                  <UserDropdown></UserDropdown>
                </div>
              </div>

              <Link to={"/signup"}>
                <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold border-blue-400 rounded-md py-2 px-6">
                  Sign Up
                </button>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
