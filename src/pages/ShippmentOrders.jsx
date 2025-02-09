import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { db } from "../services/firebase"; // Firebase import
import { collection, getDocs } from "firebase/firestore"; // Firestore methods

import "../index.css"; // Ensure Tailwind is included
import BeachSignIn from "../assets/BeachSignIn.png"; // Correct import path

function ShipmentOrders() {
  const [orders, setOrders] = useState([]);
  const [produceList, setProduceList] = useState([]);
  const { selectedProduce, restaurantId } = useLocation().state || {}; // Use location to access passed state
  const query = new URLSearchParams(useLocation().search);
  const email = query.get("email");
  
  // Fetch produce list from Firebase
  useEffect(() => {
    const fetchProduce = async () => {
      try {
        const produceCollectionRef = collection(
          db,
          "Restaurants",
          restaurantId,
          "produce"
        ); // Correct subcollection path
        const querySnapshot = await getDocs(produceCollectionRef);
        const produceData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProduceList(produceData);
      } catch (error) {
        console.error("Error fetching produce data from Firestore: ", error);
      }
    };

    if (restaurantId) {
      fetchProduce();
    }
  }, [restaurantId]);

  useEffect(() => {
    if (selectedProduce && produceList.length > 0) {
      const newOrders = selectedProduce.map((produceId) => {
        const product = produceList.find((item) => item.id === produceId); // Find the product by ID
        return {
          name: product ? product.name : "Unknown Product", // Use product name
          quantity: product ? product.quantity : 1, // Use product quantity
          status: "processing", // Set default status to 'processing'
        };
      });

      setOrders(newOrders); // Update the orders state with selected produce
    }
  }, [selectedProduce, produceList]); // Re-run effect when selectedProduce or produceList changes

  return (
    <div
      className="h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${BeachSignIn})` }}
    >
      {/* NAVBAR */}
      <nav className="flex justify-evenly bg-white h-20 w-full top-0 shadow-lg border-none">
      <div className="flex items-center justify-center h-full w-full text-2xl text-center transition duration-0">
        Food Rescue
      </div>
      <Link
        to={`/?email=${encodeURIComponent(email || "")}`} // Pass email to Home
        className="flex items-center justify-center hover:bg-black hover:text-white h-full w-full text-2xl text-center transition duration-200"
      >
        Home
      </Link>
      <Link
        to={`/FindFood?email=${encodeURIComponent(email || "")}`} // Pass email to FindFood
        className="flex items-center justify-center hover:bg-black hover:text-white h-full w-full text-2xl text-center transition duration-200"
      >
        Find Food
      </Link>
      <Link
        to={`/RestaurantForm?email=${encodeURIComponent(email || "")}`} // Pass email to RestaurantForm
        className="flex items-center justify-center hover:bg-black hover:text-white h-full w-full text-2xl text-center transition duration-200"
      >
        Restaurant Form
      </Link>
      {email ? (
        <Link
          to={`/ShipmentOrders?email=${encodeURIComponent(email)}`} // Pass email to Account
          className="flex items-center justify-center hover:bg-black hover:text-white h-full w-full text-2xl text-center transition duration-200"
        >
          Account
        </Link>
      ) : (
        <Link
          to="/SignIn"
          className="flex items-center justify-center hover:bg-black hover:text-white h-full w-full text-2xl text-center transition duration-200"
        >
          Sign In
        </Link>
      )}
    </nav>

      <div className="flex-grow flex items-center justify-center mt-16">
        {/* Black Transparent Box for Shadow Effect */}
        <div className="absolute bg-black opacity-50 w-96 p-6 shadow-lg rounded-xl"></div>

        <div className="relative bg-gray-850 bg-opacity-50 backdrop-blur-md p-6 shadow-lg w-96 rounded-xl">
          <h2 className="text-2xl font-semibold text-center text-white">
            Shipment Orders
          </h2>
          <ul className="mt-4">
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <li
                  key={index}
                  className="mb-4 p-4 bg-gray-800 bg-opacity-40 rounded-lg"
                >
                  <div className="text-white">
                    <strong>Product:</strong> {order.name}
                    <br />
                    <strong>Quantity:</strong> {order.quantity}
                    <br />
                    <strong>Status:</strong>{" "}
                    <span
                      className={`status ${order.status} px-2 py-1 rounded-lg`}
                    >
                      {order.status.charAt(0).toUpperCase() +
                        order.status.slice(1)}
                    </span>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-white">No orders found</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShipmentOrders;
