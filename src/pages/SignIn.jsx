import React from "react";
import { Link } from "react-router-dom";
import "../index.css"; // Ensure Tailwind is included
import BeachSignIn from "../assets/BeachSignIn.png"; // Correct import path

function SignIn() {
  return (
    <div 
      className="h-screen flex flex-col bg-cover bg-center" 
      style={{ backgroundImage: `url(${BeachSignIn})` }} // Use imported image
    >
      {/* NAVBAR */}
      <nav className="flex justify-evenly bg-white h-12 w-full fixed top-0 shadow-lg border-none">
        <div className="flex items-center justify-center hover:bg-black hover:text-white h-full w-full text-center transition duration-200">Food Rescue</div> 
        <Link to="/" className="flex items-center justify-center hover:bg-black hover:text-white h-full w-full text-center transition duration-200">Home</Link>
        <Link to="/FindFood" className="flex items-center justify-center hover:bg-black hover:text-white h-full w-full text-center transition duration-200">Find Food</Link>
        <Link to="/SignIn" className="flex items-center justify-center hover:bg-black hover:text-white h-full w-full text-center transition duration-200">Sign In</Link>
      </nav>
      
      <div className="flex-grow flex items-center justify-center mt-16">
        {/* Black Transparent Box for Shadow Effect */}
        <div className="absolute bg-black opacity-50 w-96 p-6 shadow-lg rounded-xl"></div>
        
        <div className="relative bg-gray-850 bg-opacity-50 backdrop-blur-md p-6 shadow-lg w-96 rounded-xl">
          <h2 className="text-2xl font-semibold text-center text-white">Sign In</h2>
          <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-600 transform hover:scale-105 transition duration-200">
            Sign in with Google
          </button>
          <button className="w-full bg-blue-700 text-white py-2 mt-2 rounded-lg hover:bg-blue-800 transform hover:scale-105 transition duration-200">
            Sign in with Facebook
          </button>
          <button className="w-full bg-black text-white py-2 mt-2 rounded-lg hover:bg-gray-800 transform hover:scale-105 transition duration-200">
            Sign in with Apple
          </button>
          <p className="text-center my-4 text-white">OR</p>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full border border-gray-300 p-2 mt-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-white placeholder-white"
          />
          <button className="w-full bg-red-500 text-white py-2 mt-4 rounded-lg hover:bg-red-600 transform hover:scale-105 transition duration-200">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
