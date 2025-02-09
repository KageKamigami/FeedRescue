import Chicken from "../assets/v2_2.png";
import Horse from "../assets/v2_3.png";
import Pig from "../assets/v2_4.png";
import Goat from "../assets/v2_5.png";
import Turkey from "../assets/v2_6.png";
import Cow from "../assets/v2_7.png";
import Sheep from "../assets/v2_8.png";
import GrainPhoto from "../assets/v2_73.png";
import RestaurantPhoto from "../assets/v2_27.png";
import CowBanner from "../assets/cow.png";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../services/firebase"; // Firestore instance
import { collection, getDocs } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import RestaurantProduce from "./RestaurantProduce"; // Import RestaurantProduce

function FindFood() {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();
  const [selectedAnimal, setSelectedAnimal] = useState(null); // Track selected animal
  const [selectedRestaurant, setSelectedRestaurant] = useState(null); // Track selected restaurant
  const query = new URLSearchParams(useLocation().search);
  const email = query.get("email");

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const querySnapshot = await getDocs(collection(db, "Restaurants"));
        const restaurantList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRestaurants(restaurantList);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    }
    fetchRestaurants();
  }, []);

  // Animal Data
  const animals = [
    { name: "Chicken", image: Chicken },
    { name: "Horse", image: Horse },
    { name: "Pig", image: Pig },
    { name: "Goat", image: Goat },
    { name: "Turkey", image: Turkey },
    { name: "Cow", image: Cow },
    { name: "Sheep", image: Sheep },
  ];

  if (selectedRestaurant) {
    return (
      <RestaurantProduce
        restaurantId={selectedRestaurant}
        onBack={() => setSelectedRestaurant(null)}
      />
    );
  }

  return (
    <>
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
      <img className="h-100 w-full max-w-full" src={CowBanner}></img>
      <div className="gap-12 flex flex-row justify-evenly items-center bg-[#F2F2F2] p-4"></div>
      <div className="bg-[#FFFFFF]">
        <div className="flex justify-center items-center gap-12 p-8">
          {animals.map((animal) => (
            <div
              key={animal.name}
              className="text-center font-semibold cursor-pointer transition-all"
              onClick={() => setSelectedAnimal(animal.name)}
            >
              <img
                src={animal.image}
                className={`w-24 h-24 bg-[#F2F2F2] rounded-lg ${
                  selectedAnimal === animal.name
                    ? "border-4 border-yellow-500 scale-110"
                    : ""
                }`}
                alt={animal.name}
              />
              {animal.name}
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-center items-center gap-12 -z-10">
          <div className="relative rounded-2xl overflow-hidden w-1/3">
            <img src={GrainPhoto} />
            <div className="absolute inset-0 flex flex-col justify-center items-start p-4 w-1/2">
              <h1 className="text-white font-bold">
                Order $50+ get 10lbs feed for cheap
              </h1>
              <h2 className="bg-[#884800] text-black px-2 py-1 rounded w-fit mt-2">
                Get now
              </h2>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden w-1/3">
            <img src={GrainPhoto} />
            <div className="absolute inset-0 flex flex-col justify-center items-start p-4 w-1/2">
              <h1 className="text-white font-bold">
                Order $50+ get 10lbs feed for cheap
              </h1>
              <h2 className="bg-[#884800] text-black px-2 py-1 rounded w-fit mt-2">
                Get now
              </h2>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-20 w-3/4 ml-45 pb-20">
          <div className="grid grid-cols-3 gap-8 w-full">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} className="rounded-2xl">
                <img
                  src={RestaurantPhoto}
                  className="rounded-2xl w-full"
                  alt={restaurant.name}
                />
                <div
                  className="font-semibold pl-1 cursor-pointer text-blue-500 underline"
                  onClick={() => setSelectedRestaurant(restaurant.id)} // Set selected restaurant
                >
                  {" "}
                  {restaurant.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default FindFood;