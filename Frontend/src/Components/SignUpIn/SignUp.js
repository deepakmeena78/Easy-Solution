import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import "../../App.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const SignUp = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordVisible, setPasswordVisible] = useState(false);
  toast.success("Sign Up Page");

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
    setPasswordType(passwordVisible ? "password" : "text");
  };

  return (<>
    <ToastContainer />
    <div className="flex items-center justify-center min-h-screen bg-relatedWhite py-10 px-2">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-relatedWhite border border-darkColor rounded-lg shadow-[0px_3px_8px_rgba(0,0,0,0.24)] py-2">
        {/* Left Side (Form) */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
            Easy Solution Sign Up Now!
          </h2>
          <hr className="sm:w-48 lg:w-48 border-1 border-darkColor justify-self-center" />
          <form>
            <div className="relative w-full mt-4">
              <input type="text" id="name" name="name"
                className="peer w-full px-3 pt-3.5 pb-0.2 border-b border-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-darkColor text-mutedColor"
                placeholder="name"
              />
              <label htmlFor="name"
                className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-darkColor peer-focus:text-sm"
              >
                Name
              </label>
              <span className="text-red-400 text-sm"></span>
            </div>

            <div className="relative w-full mt-4">
              <input type="email" id="email" name="email"
                className="peer w-full px-3 pt-3.5 pb-0.2 border-b border-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-darkColor text-black"
                placeholder="email"
              />
              <label htmlFor="email"
                className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-darkColor peer-focus:text-sm"
              >
                Email
              </label>
              <span className="text-red-400 text-sm"></span>
            </div>

            <div className="relative w-full mt-4">
              <input type={passwordType} id="password" name="password"
                className="peer w-full px-3 pt-3.5 pb-0.2 border-b border-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-darkColor text-mutedColor"
                placeholder="Password"
              />
              <label htmlFor="password"
                className="absolute left-3 top-0 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-darkColor peer-focus:text-sm"
              >
                Password
              </label>
              <button type="button" id="togglePassword" onClick={togglePassword}
                className="absolute right-3 top-4 text-gray-500 hover:text-[var(--mid-green)] transition focus:outline-none"
              >
                {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>

            <div className="relative w-full mt-4">
              <input type="text" id="mobile" name="mobile"
                className="peer w-full px-3 pt-3.5 pb-0.2 border-b border-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-darkColor text-mutedColor"
                placeholder="mobile"
              />
              <label htmlFor="mobile"
                className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-darkColor peer-focus:text-sm"
              >
                Mobile
              </label>
              <button
                type="button"
                id="togglePassword"
                onClick={togglePassword}
                className="absolute right-3 top-4 text-gray-500 hover:text-darkColor focus:outline-none"
              >
              </button>
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                className="w-full py-3 bg-[var(--mid-green)] text-white rounded-lg hover:bg-mutedColor transition duration-200"
              >
                Sign Up
              </button>
            </div>
            <div className="text-center mt-2">
              <p className="text-gray-700">
                Already have an account?
                <Link to="/login" className="text-[var(--link-blue)] hover:underline transition duration-200 ml-2">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Right Side (Image) */}
        <div
          className="hidden md:block w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url('/Images/sign_up.jpg')` }}>
        </div>
      </div>
    </div>
  </>
  );
};

export default SignUp;
