import React from "react";
import "../index.css"; // Ensure Tailwind is included

function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center">Sign In</h2>
        <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-600">
          Sign in with Google
        </button>
        <button className="w-full bg-blue-700 text-white py-2 mt-2 rounded-lg hover:bg-blue-800">
          Sign in with Facebook
        </button>
        <button className="w-full bg-black text-white py-2 mt-2 rounded-lg hover:bg-gray-800">
          Sign in with Apple
        </button>
        <p className="text-center my-4">OR</p>
        <p className="text-center text-gray-700">Continue with Email</p>
        <button className="w-full bg-red-500 text-white py-2 mt-4 rounded-lg hover:bg-red-600">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default SignIn;
