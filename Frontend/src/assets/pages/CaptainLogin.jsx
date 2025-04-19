import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo2 from "../../../public/images/captain-logo.svg";


const CaptainLogin = () => {
  const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [captainData, setCaptainData] = useState({});
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setCaptainData({ email: email, Password: Password });
      console.log(captainData);
      setEmail("");
      setPassword("");
    };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-8">
      {/* Logo Section */}
      <div className="w-full flex  mb-8">
        <img className="w-16" src={logo2} alt="Logo" />
      </div>

      {/* Form Container */}
      <div className="w-full max-w-sm space-y-8">
        <form
          className="space-y-6"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          {/* Title */}
          <h1 className=" font-semibold text-black ">What's your email?</h1>

          {/* Input Fields */}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            className="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-black text-white font-medium py-3 rounded-lg hover:bg-gray-900 transition"
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center">
          Join as fleet?
          <Link className="text-blue-600" to="/captain-signup">
            {" "}
            Register as a Captain
          </Link>
        </p>

        {/* Captain Login */}
      
        <p className="text-xs text-gray-500 mt-30 text-center leading-5">
          This Site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy</span> Policy and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
}

export default CaptainLogin
