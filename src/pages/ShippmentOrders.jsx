import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../index.css"; // Ensure Tailwind is included
import BeachSignIn from "../assets/BeachSignIn.png"; // Correct import path

function ShipmentOrders() {
  const [orders, setOrders] = useState([]);

  // Simulate fetching orders from an external source
  useEffect(() => {
    const fetchOrders = () => {
      // This would typically be replaced with an API call or file read
      const orders = [
        { product: "Organic Chicken Feed", quantity: 2, status: "processing" },
        { product: "Premium Horse Feed", quantity: 1, status: "shipped" },
        { product: "Natural Cow Feed", quantity: 3, status: "delivered" }
      ];
      setOrders(orders);
    };

    fetchOrders();
  }, []);

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
        <div className="absolute bg-black opacity-50 w-96 p-6 shadow-lg rounded-xl"></div>

        <div className="relative bg-gray-850 bg-opacity-50 backdrop-blur-md p-6 shadow-lg w-96 rounded-xl">
          <h2 className="text-2xl font-semibold text-center text-white">
            Shipment Orders
          </h2>
          <ul className="mt-4">
            {orders.map((order, index) => (
              <li key={index} className="mb-4 p-4 bg-gray-800 bg-opacity-40 rounded-lg">
                <div className="text-white">
                  <strong>Product:</strong> {order.product}<br />
                  <strong>Quantity:</strong> {order.quantity}<br />
                  <strong>Status:</strong>{" "}
                  <span className={`status ${order.status} px-2 py-1 rounded-lg`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShipmentOrders;