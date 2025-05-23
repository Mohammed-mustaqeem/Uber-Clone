import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../public/images/logo.png";
import { userDataContext } from "../../Context/UserContext";
import axios from "axios";
const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const [User, setUser] = useContext(userDataContext);
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserData({ email: email, password: password });

    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        loginData
      );
      if (response.status === 200) {
        const data = response.data;
        console.log("login success", data); // Log the response data instead of the entire response
        setUser(data.user);
        localStorage.setItem("token", data.token);
        Navigate("/home");
      }
    } catch (error) {
      console.log("login error", error.message);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-8">
      {/* Logo Section */}
      <div className="w-full flex mb-8">
        <img className="w-16" src={logo} alt="Logo" />
      </div>

      {/* Form Container */}
      <div className="w-full max-w-sm space-y-2">
        <form
          className="space-y-6"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          {/* Title */}
          <h1 className=" font-semibold text-black">What's your email?</h1>

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
            value={password}
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
          New here?
          <Link className="text-blue-600" to="/signup">
            {" "}
            Create new Account{" "}
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

export default UserLogin;
