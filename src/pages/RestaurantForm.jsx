import { Link } from "react-router-dom"; // Import Link
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../services/firebase"; // Import Firestore instance
import { collection, addDoc } from "firebase/firestore";

const RestaurantForm = () => {
  const query = new URLSearchParams(useLocation().search);
  const email = query.get("email");
  
  const [restaurant, setRestaurant] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [produce, setProduce] = useState([]);
  const [newProduce, setNewProduce] = useState({
    name: "",
    price_per_unit: "",
    quantity: "",
  });

  const [restaurantId, setRestaurantId] = useState(null); // To store the restaurant ID after creation

  // Handle restaurant input
  const handleRestaurantChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  // Handle produce input
  const handleProduceChange = (e) => {
    setNewProduce({ ...newProduce, [e.target.name]: e.target.value });
  };

  // Add produce to local state
  const addProduce = () => {
    if (newProduce.name && newProduce.price_per_unit && newProduce.quantity) {
      setProduce([...produce, newProduce]);
      setNewProduce({ name: "", price_per_unit: "", quantity: "" });
    }
  };

  // Submit restaurant and produce to Firestore
  const handleSubmitRestaurant = async (e) => {
    e.preventDefault();
    try {
      // Step 1: Add restaurant to Firestore
      const restaurantRef = await addDoc(
        collection(db, "Restaurants"),
        restaurant
      );
      setRestaurantId(restaurantRef.id); // Save restaurant ID for produce

      alert("Restaurant added! Now you can add produce.");
    } catch (error) {
      console.error("Error adding restaurant: ", error);
    }
  };

  // Submit produce to Firestore
  const handleSubmitProduce = async (e) => {
    e.preventDefault();
    try {
      // Step 2: Add produce to Firestore under the restaurant's produce subcollection
      if (restaurantId) {
        const produceCollectionRef = collection(
          db,
          `Restaurants/${restaurantId}/produce`
        );
        for (let item of produce) {
          await addDoc(produceCollectionRef, item);
        }
        alert("Produce items added!");
      } else {
        alert("Please add the restaurant first!");
      }

      // Clear produce after submitting
      setProduce([]);
    } catch (error) {
      console.error("Error adding produce: ", error);
    }
  };

  return (
      <>
      {/* NAVIGATION BAR */}
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

    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col items-center justify-center w-auto h-auto mt-50">
      <h2 className="text-xl font-bold mb-4">Add Restaurant & Produce</h2>

      {/* Restaurant Form */}
      <form onSubmit={handleSubmitRestaurant} className="space-y-4 ">
        <input
          type="text"
          name="name"
          placeholder="Restaurant Name"
          value={restaurant.name}
          onChange={handleRestaurantChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={restaurant.email}
          onChange={handleRestaurantChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={restaurant.address}
          onChange={handleRestaurantChange}
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Add Restaurant
        </button>
      </form>

      {/* Show Produce Form only after Restaurant is added */}
      {restaurantId && (
        <div>
          <h3 className="text-lg font-bold mt-4">Add Produce</h3>
          <div className="flex space-x-2">
            <input
              type="text"
              name="name"
              placeholder="Produce Name"
              value={newProduce.name}
              onChange={handleProduceChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              name="price_per_unit"
              placeholder="Price"
              value={newProduce.price_per_unit}
              onChange={handleProduceChange}
              className="w-24 p-2 border rounded"
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={newProduce.quantity}
              onChange={handleProduceChange}
              className="w-24 p-2 border rounded"
            />
            <button
              type="button"
              onClick={addProduce}
              className="bg-blue-500 text-white p-2 rounded"
            >
              +
            </button>
          </div>

          {/* Display Added Produce */}
          <ul className="mt-2">
            {produce.map((item, index) => (
              <li key={index} className="text-sm text-gray-700">
                {item.name} - ${item.price_per_unit} ({item.quantity} available)
              </li>
            ))}
          </ul>

          <button
            onClick={handleSubmitProduce}
            className="w-full bg-blue-500 text-white p-2 rounded mt-4"
          >
            Add Produce
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default RestaurantForm;
