import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineCancelPresentation } from "react-icons/md";

const Signup = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        onClick={() => document.getElementById("my_modal_1").showModal()}
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold border-blue-400 rounded py-2 px-6"
      >
        Sign Up
      </button>
      <dialog id="my_modal_1" className="modal">
        
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
              src="https://i.ibb.co/w6FkzdF/logo.png"
              alt=""
            />
          </div>
          <h3 className="font-bold text-lg text-center mt-2">Welcome To <span className="text-rose-600 font-bold">Watch Sphere</span></h3>

          <div className="flex justify-center mt-3">
          <button
                  className="w-full font-semibold transition duration-300 border border-gray-300 hover:shadow-md px-4 py-2 text-white mb-3 flex items-center gap-2 justify-center rounded-md bg-blue-500"
                >
                  <FaFacebookF></FaFacebookF> Coninue with Facecbook
                </button>
          </div>

          <div className="flex justify-center">
          <button
                  className="w-full font-semibold transition duration-300 border border-gray-300 hover:shadow-md px-4 py-2 text-gray-600 mb-3 flex items-center gap-2 justify-center rounded-md"
                >
                  <FcGoogle></FcGoogle> Coninue with Google
                </button>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-40 h-0.5 bg-gray-200"></div>
          <p className="text-gray-500 font-semibold">Or</p>
            <div className="w-40 h-0.5 bg-gray-200"></div>
          </div>

          <div>
                <div className="mb-2">
                  <p className="mb-1 font-semibold text-gray-600">Your Name</p>
                  <input
                    name="name"
                    className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                    type="text"
                    placeholder="Rahul Sutradhar"
                  />
                </div>

                <div className="mb-2">
                  <p className="mb-1 font-semibold text-gray-600">Your Email</p>
                  <input
                    name="email"
                    className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                    type="email"
                    placeholder="rahul@gmail.com"
                  />
                </div>

                <div className="mb-3">
                  <p className="mb-1 font-semibold text-gray-600">Password</p>
                  <input
                    name="password"
                    className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                    type="password"
                    placeholder="*********"
                  />
                </div>

                <div className="mb-3 flex justify-between items-center">
                  <p className="textgray-600 font-semibold flex items-center gap-2">
                    <input type="checkbox" className="checkbox text-blue-600" />{" "}
                    Remember me
                  </p>

                  <Link
                    to={"/forgotPassword"}
                    className="textgray-600 font-semibold text-blue-400"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <button className="w-full font-semibold transition duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded text-white mb-3">
                  Sign Up
                </button>

                <p className="mb-4 text-center">
                  Already Have An Account?{" "}
                  <Link
                    to={"/login"}
                    className="text-blue-400 font-semibold underline"
                  >
                    Sign in
                  </Link>
                </p>

                <p className="text-gray-500 text-center mt-10">By registering, you agree to Wtach Sphere's Terms of Use and Privacy Policy.</p>
              </div>
        </div>
      </dialog>
    </div>
  );
};

export default Signup;
