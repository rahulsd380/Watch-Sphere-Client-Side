import bgVideo from "../../../public/bgVideo.mp4";
import { FaPlayCircle } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";

const Hero = () => {
  return (
    <div>
<div className="relative">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src={bgVideo}
      ></video>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10">

        <div className="w-full h-screen flex items-center">
          <div className="  ">
            <div className="px-20 py-9 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-blue-400 mb-7">Motivational Movie</p>
                <h1 className="text-gray-50 font-bold text-6xl mb-3 bg-gradient-to-br from-yellow-300  to-red-600 bg-clip-text text-transparent dark:text-orange-500">
                  12th Fail - Restart
                </h1>


                <div className="flex items-center gap-8 mt-7">
                <p className="flex items-center gap-2 text-white">
                    <CiStar className="text-blue-300"></CiStar>
                    5.0
                </p>
                <p className="flex items-center gap-2 text-white font-semibold">
                    <CiCalendarDate className="text-blue-300"></CiCalendarDate>
                    2023
                </p>
                <p className="flex items-center gap-2 text-white">
                    <CiTimer className="text-blue-300"></CiTimer>
                    2 hr 34 min
                </p>
                <p className=" text-white">
                    Best Movie
                </p>
                </div>
                <p className="text-white mt-7 text-justify">
                  Explore a world of cutting-edge smartphones, from flagship
                  models to budget-friendly options. Find the perfect device to
                  stay connected and capture.
                </p>
                <div className="flex gap-10 mt-10">

                <button
                    className="rounded-lg focus:outline-none h-12 px-5 bg-gradient-to-br from-yellow-300  to-red-600 text-white font-semibold flex items-center gap-2"
                  >
                    Play Now
                    <FaPlayCircle className="text-2xl"></FaPlayCircle>
                  </button>

                <p
                    className="text-white font-semibold flex items-center gap-2"
                  >
                    Watch Later
                    <CiBookmarkPlus className="text-2xl"></CiBookmarkPlus>
                  </p>
                  
                </div>
              </div>

              <div>
                <img className="w-auto" src="/Untitled-3.png" alt="" />
              </div>
            </div>
          </div>

          





        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
