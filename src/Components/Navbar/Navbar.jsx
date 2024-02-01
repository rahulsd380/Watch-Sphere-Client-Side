import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import UserDropdown from "./UserDropdown";
import { IoIosArrowDown } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import MyTickets from "../MyTickets/MyTickets";

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
              src="https://i.ibb.co/s3nY4Nv/logo.png"
              alt=""
            />
          </div>

          <div className="hidden md:flex md:items-center md:gap-8">
            <Link
              to={"/"}
              className="hover:text-blue-400 transition duration-300 text-gray-400 font-semibold "
            >
              Home
            </Link>
            <Link
              to={"/"}
              className="hover:text-blue-400 transition duration-300 text-gray-400 font-semibold "
            >
              About Us
            </Link>

            <Link
              to={"/plans"}
              className="hover:text-blue-400 transition duration-300 text-gray-400 font-semibold flex items-center gap-2"
            >
              Pricing Plans
              <IoIosArrowDown></IoIosArrowDown>
            </Link>
            <Link
              to="/allMovie"
              className="hover:text-blue-400 transition duration-300 text-gray-400 font-semibold flex items-center gap-2"
            >
              All Movie
              <IoIosArrowDown></IoIosArrowDown>
            </Link>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex gap-2">
            <div className="hidden relative md:flex items-center">
              <IoIosSearch className="absolute text-3xl text-gray-400 ml-1"></IoIosSearch>
              <input
                name="text"
                className="bg-gray-700 border border-gray-600 text-gray-200 outline-none pl-9 py-2 rounded w-full"
                type="text"
                placeholder="Movies, Series"
              />
            </div>
            <div className="hidden md:flex items-center text-gray-500 bg-gray-600 px-2 rounded">
              <GrLanguage className="text-xl text-gray-300"></GrLanguage>
              <select className="bg-gray-600 text-gray-300">
                <option value="eng">Eng</option>
                <option value="ban">Ban</option>
                <option value="chi">Chi</option>
              </select>

              <div>
                <UserDropdown></UserDropdown>
              </div>
            </div>

            <div className="bg-gray-600 px-2 rounded flex items-center justify-center">
              <MyTickets></MyTickets>
            </div>

            <Link to={"/signup"}>
            <button
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold border-blue-400 rounded py-2 px-6"
      >
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
