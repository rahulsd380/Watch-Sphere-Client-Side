import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";


const TicketBookingForm = ({details}) => {
        
    const handleBookNow = () => {
        const formData = {
          movieName: details?.show?.name,
          image: details?.show?.image?.original,
          day: details?.show?.schedule?.days[0],
          movieType: details?.show?.genres[0],
          name: document.getElementById("name").value,
          phone: document.getElementById("phone").value,
        };
    
        // Retrieve existing data from local storage
        const existingData = JSON.parse(localStorage.getItem("bookingData"));
    
        // Check if existingData is an array, if not, initialize an empty array
        const newData = Array.isArray(existingData) ? [...existingData, formData] : [formData];
    
        // Store the updated array back in local storage
        localStorage.setItem("bookingData", JSON.stringify(newData));
    
        const toastId = toast.loading("Booking...");
        toast.success("Ticket booked successfully.", { id: toastId });
      };



    return (
        <div>
            <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
      onClick={() => document.getElementById("my_modal_2").showModal()}
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold border-blue-400 rounded py-2 px-6 mb-10 flex items-center gap-2"
      >
        <IoTicketSharp></IoTicketSharp> Book A Ticket
      </button>
      <dialog id="my_modal_2" className="modal">
        
        <div className="modal-box px-10 relative">
            
          <div className="absolute right-3">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button><MdOutlineCancelPresentation className="text-2xl text-gray-500"></MdOutlineCancelPresentation></button>
            </form>
          </div>
        <div className="flex justify-center">
            <img
              className="w-32"
              src="https://i.ibb.co/M5YDjf1/favIcon.png"
              alt=""
            />
          </div>
          <h3 className="font-bold text-lg text-center mt-2 mb-4">Book Your Favorite <span className="text-blue-500 font-bold">Movie Ticket</span></h3>

          <div>
                <div className="mb-2">
                  <p className="mb-1 font-semibold text-gray-600">Movie Name</p>
                  <input
                    name="name"
                    className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                    type="text"
                    defaultValue={details?.show?.name}
                  />
                </div>


                <div className="grid grid-cols-2 gap-5">
                <div className="mb-2">
                  <p className="mb-1 font-semibold text-gray-600">Day</p>
                  <input
                    name="name"
                    className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                    type="text"
                    defaultValue={details?.show?.schedule?.days[0]}
                  />
                </div>
                <div className="mb-2">
                  <p className="mb-1 font-semibold text-gray-600">Movie Type</p>
                  <input
                    name="name"
                    className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                    type="text"
                    defaultValue={details?.show?.genres[0]}
                  />
                </div>
                </div>

                <div className="mb-2">
                  <p className="mb-1 font-semibold text-gray-600">Your Name</p>
                  <input
                  id="name"
                    name="name"
                    className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                    type="text"
                    placeholder="Rahul Sutradhar"
                  />
                </div>

                <div className="mb-5">
                  <p className="mb-1 font-semibold text-gray-600">Phone</p>
                  <input
                  id="phone"
                    name="phone"
                    className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                    type="text"
                    placeholder="+91 873617654"
                  />
                </div>

                <button
                onClick={handleBookNow}
                className="w-full font-semibold transition duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded text-white mb-3">
                  Book Now
                </button>

                <p className="mb-4 text-center">
                  View Other Movies{" "}
                  <Link
                    to={"/allMovie"}
                    className="text-blue-400 font-semibold underline"
                  >
                    All Movies
                  </Link>
                </p>
              </div>
        </div>
      </dialog>
    </div>
    <Toaster position="top-right" reverseOrder={false}/>

        </div>
    );
};

export default TicketBookingForm;