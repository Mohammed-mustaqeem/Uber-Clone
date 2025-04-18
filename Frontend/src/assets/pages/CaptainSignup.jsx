import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../../../public/images/captain-logo.svg";

const CaptainSignup = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-8">
      {/* Logo Section */}
      <div className="w-full flex mb-8">
        <img className="w-16" src={logo2} alt="Logo" />
      </div>

      {/* Form Container */}
      <div className="w-full max-w-sm space-y-2">
        <form className="space-y-1" >
          <h3 className=" font-semibold text-black ">What's your name?</h3>
          <div className="flex gap-2">
            <input
              // value={firstName}
              // onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
              className="w-1/2 px-3 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-sm"
            />
            <input
              // value={lastName}
              // onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Laset Name"
              className="w-1/2 px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-sm"
            />
          </div>

          {/* Title */}
          <h3 className=" font-semibold text-black">What's your email?</h3>

          {/* Input Fields */}
          <input
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter Your Email"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-sm"
          />
          <h3 className=" font-semibold text-black">Enter Password</h3>
          <input
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Your Password"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-sm"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center mt-2 justify-center bg-black text-white font-medium py-3 rounded-lg hover:bg-gray-900 transition"
          >
            Continue
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center">
          Already have an Account?
          <Link className="text-blue-600" to="/login">
            {" "}
            Login{" "}
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <hr className="flex-grow border-gray-300" />
          <span className="text-sm text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Sign-in */}
        <button className="w-full flex items-center gap-3 justify-center border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-sm font-medium text-gray-700">
            Continue with Google
          </span>
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <hr className="flex-grow border-gray-300" />
          <span className="text-sm text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Captain Login */}
        <Link
          to="/captain-login"
          className="w-full flex items-center gap-3 justify-center bg-green-300 border border-black py-3 rounded-lg hover:bg-green-400 transition"
        >
          <span className="text-sm font-medium text-gray-700">
            Sign in as Captain
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CaptainSignup;
