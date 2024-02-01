import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { FaStar } from "react-icons/fa6";
import { IoTicketSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "../Footer/Footer";
import TicketBookingForm from "../TicketBookingForm/TicketBookingForm";

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

  const [allMovies, setAllMovies] = useState([]);
  console.log(allMovies);
  const url = "https://api.tvmaze.com/search/shows?q=all";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllMovies(data));
  }, [url]);

  // Ca
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="">
        <img
          className="h-screen w-full mb-0 md:mb-2 rounded-md"
          src={
            details?.show?.image ? details?.show?.image?.original : "No Image"
          }
          alt=""
        />
        </div>
        <div className="col-span-2 px-5">
          <div className="flex items-center gap-10 mb-3">
            <h1 className="text-white text-3xl font-bold">
              {details?.show?.name}
            </h1>

            <h1 className="text-white text-2xl font-bold flex items-center gap-2">
              <FaStar className="text-blue-400"></FaStar>{" "}
              {details?.show?.rating?.average
                ? details?.show?.rating?.average
                : "0"}
            </h1>
          </div>
          <p className="text-gray-200 flex items-center gap-3 mb-3">
            {details?.show?.ended ? details?.show?.ended : "Upcoming"} |{" "}
            <span className="text-gray-200">
              {details?.show?.schedule?.time} min
            </span>{" "}
            <span className="bg-blue-600 rounded px-2 py-0.5">
              {details?.show?.genres[0]}
            </span>
          </p>

          <p className="text-gray-400 flex items-center gap-3 mb-3">
            {details?.show?.summary}
          </p>

          <p className="text-blue-500 flex items-center gap-6 mb-3 text-lg">
            Network:{" "}
            <span className="font-semibold text-gray-200">
              {details?.show?.network?.country?.name}
            </span>
          </p>

          <p className="text-blue-500 flex items-center gap-6 mb-3 text-lg">
            {" "}
            Country Code:
            <span className="font-semibold text-gray-200">
              {details?.show?.network?.country?.code}
            </span>
          </p>

          <p className="text-blue-500 flex items-center gap-6 text-lg mb-5">
            Timezone:{" "}
            <span className="font-semibold text-gray-200">
              {details?.show?.network?.country?.timezone}
            </span>
          </p>

          <TicketBookingForm
          details={details}
          >

          </TicketBookingForm>

          <h1 className="text-2xl font-semibold text-blue-500 mb-6">Related Movies</h1>


          <div>
  <Swiper
    spaceBetween={10}
    centeredSlides={false}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
    slidesPerView={3} // Set the number of slides per view to 3
  >
    {allMovies.map((movie) => (
      <SwiperSlide
      className="pb-6"
        to={`/trendingMoviesDetails/${movie.show.id}`}
        key={movie.show.id}
      >
        {/* Your movie card content here */}
        <img
          className="w-35 md:w-60 h-44 md:h-72 mb-2 rounded-md"
          src={
            movie.show.image
              ? movie.show.image.original
              : "No Image"
          }
          alt=""
        />
        <h1 className="text-xl font-bold text-white">
          {movie.show.name}
        </h1>
        <p className="text-white text-xs mt-2 flex items-center gap-4">
          {/* Other movie card details */}
        </p>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default TrendingMoviesDetails;
