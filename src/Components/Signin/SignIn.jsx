import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../Navbar/Navbar";
import { MdError } from "react-icons/md";

const Signin = () => {
    const [loginError, setLoginError] = useState("");
    const { login, googleSignUp } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const email = form.get("email");
      const password = form.get("password");
      console.log(email, password);
      const toastId = toast.loading("Signing In...");
      login(email, password)
        .then((result) => {
          console.log(result.user);
          if (result.user?.email) {
            toast.dismiss(toastId);
            toast.success("Signed in successfully.", { id: toastId });
            navigate(location?.state ? location.state : "/");
          }
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
          setLoginError(error.message)
          toast.dismiss(toastId);
          toast.error(toastId, {
            render: `Error: ${error.message}`,
            type: 'error',
            duration: 5000, 
          });
          return
        });
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
          <h3 className="font-bold text-lg text-gray-300 text-center mt-2">Welcome Back To <span className="text-blue-500 font-bold">Watch Sphere</span></h3>

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

          <form onSubmit={handleLogin}>
          {loginError?
                <p className="bg-rose-600 p-2 rounded-lg text-white flex items-center gap-2 mb-2">
                  <MdError></MdError> {loginError}
                </p>
             : 
                ""
              }
          <div>

                <div className="mb-2">
                  <p className="mb-1 font-semibold text-gray-200">Your Email</p>
                  <input
                    name="email"
                    className="bg-gray-700 border border-gray-400 outline-none px-2 py-1 rounded w-full"
                    type="email"
                    placeholder="rahul@gmail.com"
                  />
                </div>

                <div className="mb-3">
                  <p className="mb-1 font-semibold text-gray-200">Password</p>
                  <input
                    name="password"
                    className="bg-gray-700 border border-gray-400 outline-none px-2 py-1 rounded w-full"
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
                    className="textgray-600 font-semibold text-blue-400"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <button className="w-full font-semibold transition duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded text-white mb-3">
                  Sign In
                </button>

                <p className="mb-4 text-center text-gray-400">
                  Don't Have An Account?{" "}
                  <Link
                    to={"/signup"}
                    className="text-blue-400 font-semibold underline"
                  >
                    Sign Up
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

export default Signin;
