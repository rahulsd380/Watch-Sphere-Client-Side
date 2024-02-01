import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { FaStar } from "react-icons/fa6";

const TrendingMoviesDetails = () => {
  const [details, setDetails] = useState({});
  console.log(details);

  const { id } = useParams();
  const allDetails = useLoaderData();

  useEffect(() => {
    const fullDetails = allDetails.find((movie) => movie.show.id == id);
    setDetails(fullDetails);
  }, [id, allDetails]);

  console.log(allDetails);
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto py-10 grid grid-cols-3 gap-10">
        <img
          className=" mb-2 rounded-md"
          src={
            details?.show?.image ? details?.show?.image?.original : "No Image"
          }
          alt=""
        />
        <div className="col-span-2">
          <div className="flex justify-between mb-3">
            <h1 className="text-white text-3xl font-bold">
              {details?.show?.name}
            </h1>

            <h1 className="text-white text-2xl font-bold flex items-center gap-2">
              <FaStar className="text-blue-400"></FaStar>{" "}
              {details?.show?.rating?.average ? details?.show?.rating?.average : "0"}
            </h1>
          </div>
          <p className="text-gray-100 flex items-center gap-3">{details?.show?.ended} | <span>{details?.show?.schedule?.time} min</span> <span className="bg-blue-600 rounded px-2 py-1">{details?.show?.genres[0]}</span></p>
        </div>
      </div>
    </div>
  );
};

export default TrendingMoviesDetails;
