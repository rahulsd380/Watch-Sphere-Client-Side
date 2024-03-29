import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const AlllMovie = () => {
  const [allMovies, setAllMovies] = useState([]);
  console.log(allMovies);
  const url = "https://api.tvmaze.com/search/shows?q=all";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllMovies(data));
  }, [url]);
  return (
    <div>
        <Navbar></Navbar>
        <div className="max-w-7xl mx-auto py-20">
      <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-semibold text-gray-200">View All Movies</h1>
      <button
              to="faq"
              className="hover:text-blue-400 transition duration-300 text-gray-400 font-semibold flex items-center gap-2"
            >
              Catagories
              <IoIosArrowDown></IoIosArrowDown>
            </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {allMovies.map((movie) => (
          <Link className="hover:scale-105 hover:-translate-y-1 transition-transform" to={`/trendingMoviesDetails/${movie.show.id}`} key={movie.show.id}>
            {/* <img
              src={movie.show.image ? movie.show.image.original : ""}
              alt=""
            /> */}
            <img
              className="w-60 h-72 mb-2 rounded-md"
              src={movie.show.image ? movie.show.image.original : "No Image"}
              alt=""
            />
            <h1 className="text-xl font-bold text-white">{movie.show.name}</h1>
            <p className="text-white text-xs mt-2 flex items-center gap-4">
              <span>{movie.show.ended? movie.show.ended : 'Upcoming'}</span> <span className="flex items-center gap-2"> || <FaStar className="text-blue-400"></FaStar> {movie.show.rating.average ? movie.show.rating.average : '0'}</span>
            </p>
            <p className="text-white text-xs mt-2">{movie.show.genres}</p>
          </Link>
        ))}
       
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default AlllMovie;