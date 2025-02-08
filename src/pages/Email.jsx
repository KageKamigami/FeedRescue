import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../index.css"; // Ensure Tailwind is included
import BeachSignIn from "../assets/BeachSignIn.png"; // Correct import path

function EmailConfirm() {
  const query = new URLSearchParams(useLocation().search);
  const email = query.get("email");

    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = () => {
        // Ensure the email is not empty before navigating
        if (password.trim() === "") {
        console.log(password);
        alert("Please enter your password before proceeding.");
        return;
        }
    
        // Navigate to the Email page with the email as a query parameter
        //navigate(`/Email?email=${encodeURIComponent(email)}`);
    };

  return (
    <div
      className="h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${BeachSignIn})` }} // Use imported image
    >
      {/* NAVBAR */}
      <nav className="flex justify-evenly bg-white h-12 w-full fixed top-0 shadow-lg border-none">
        <div className="flex items-center justify-center hover:bg-black hover:text-white h-full w-full text-center transition duration-200">
          Food Rescue
        </div>
        <Link
          to="/"
          className="flex items-center justify-center hover:bg-black hover:text-white h-full w-full text-center transition duration-200"
        >
          Home
        </Link>
        <Link
          to="/FindFood"
          className="flex items-center justify-center hover:bg-black hover:text-white h-full w-full text-center transition duration-200"
        >
          Find Food
        </Link>
        <Link
          to="/SignIn"
          className="flex items-center justify-center hover:bg-black hover:text-white h-full w-full text-center transition duration-200"
        >
          Sign In
        </Link>
      </nav>

      <div className="flex-grow flex items-center justify-center mt-16">
        {/* Black Transparent Box for Shadow Effect */}
        <div className="absolute bg-black opacity-50 w-96 h-49 p-6 shadow-lg rounded-xl"></div>

        <div className="relative bg-gray-850 bg-opacity-50 backdrop-blur-md p-6 shadow-lg w-96 rounded-xl">
        <div className="w-full border border-gray-300 p-2 mt-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-white placeholder-white">
            Your email: <strong>{email}</strong>
        </div>

          <input
            type="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-2 mt-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-white placeholder-white"
          />
          <button
             onClick={handleSignIn}
            className="w-full bg-red-500 text-white py-2 mt-4 rounded-lg hover:bg-red-600 transform hover:scale-105 transition duration-200"
          >
            Sign In
          </button>
        </div>

      </div>
    </div>
  );
}

export default EmailConfirm;
