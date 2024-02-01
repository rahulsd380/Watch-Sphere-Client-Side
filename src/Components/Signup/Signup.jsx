import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../Navbar/Navbar";

const Signup = () => {
  const {signUp, googleSignUp, updateProfileInfo} = useContext(AuthContext);
  const navigate = useNavigate();
  // signup functionality

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, name, password);
  
    const toastId = toast.loading("Signing up...");
  
    signUp(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfileInfo(name)
          .then(() => {
            if (result.user) {
              toast.success("Signed up successfully.", { id: toastId });
              navigate(location?.state ? location.state : "/");
            }
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  

  // google signup
  const googleSignIn = () => {
    googleSignUp()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div>
      <Navbar></Navbar>
        
        <div className="max-w-xl mx-auto bg-gray-800 border border-blue-400 p-10 rounded">
            
          <div className="absolute right-3">
          </div>
        <div className="flex justify-center">
            <img
              className="w-32 mb-5"
              src="https://i.ibb.co/s3nY4Nv/logo.png"
              alt=""
            />
          </div>
          <h3 className="font-bold text-lg text-gray-100 text-center mt-2">Welcome To <span className="text-blue-500 font-bold">Watch Sphere</span></h3>

          <div className="flex justify-center mt-3">
          <button
                  className="w-full font-semibold transition duration-300 hover:shadow-md px-4 py-2 text-white mb-3 flex items-center gap-2 justify-center rounded-md bg-blue-500"
                >
                  <FaFacebookF></FaFacebookF> Coninue with Facecbook
                </button>
          </div>

          <div className="flex justify-center">
          <button
          onClick={googleSignIn}
                  className="bg-blue-500 w-full font-semibold transition duration-300 hover:shadow-md px-4 py-2 text-white mb-3 flex items-center gap-2 justify-center rounded-md"
                >
                  <FcGoogle></FcGoogle> Coninue with Google
                </button>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-40 h-0.5 bg-gray-200"></div>
          <p className="text-gray-300 font-semibold">Or</p>
            <div className="w-40 h-0.5 bg-gray-200"></div>
          </div>

          <form onSubmit={handleSignUp}>
          <div>
                <div className="mb-2">
                  <p className="mb-1 font-semibold text-gray-200">Your Name</p>
                  <input
                    name="name"
                    className="bg-gray-700 border text-gray-200 border-gray-400 outline-none px-2 py-1 rounded w-full"
                    type="text"
                    placeholder="Rahul Sutradhar"
                  />
                </div>

                <div className="mb-2">
                  <p className="mb-1 font-semibold text-gray-200">Your Email</p>
                  <input
                    name="email"
                    className="bg-gray-700 border text-gray-200 border-gray-400 outline-none px-2 py-1 rounded w-full"
                    type="email"
                    placeholder="rahul@gmail.com"
                  />
                </div>

                <div className="mb-3">
                  <p className="mb-1 font-semibold text-gray-200">Password</p>
                  <input
                    name="password"
                    className="bg-gray-700 border text-gray-200 border-gray-400 outline-none px-2 py-1 rounded w-full"
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

                <p className="text-center text-gray-400">
                  Already Have An Account?{" "}
                  <Link
                    to={"/signin"}
                    className="text-blue-400 font-semibold underline"
                  >
                    Sign in
                  </Link>
                </p>

                <p className="text-gray-500 text-center mt-10">By registering, you agree to Wtach Sphere's Terms of Use and Privacy Policy.</p>
              </div>
          </form>
        </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default Signup;
