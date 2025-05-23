import React from 'react'
import logo from '../../../public/images/logo.png'
import bgImage from "../../../public/images/bg-2.avif";
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" h-screen pt-5  w-full flex justify-between flex-col bg-red-500"
      >
        <img className="w-16 ml-5" src={logo} alt="" />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link to='/login' className=" flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Start
