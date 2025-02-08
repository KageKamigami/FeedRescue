import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

function RestaurantProduce({ restaurantId, onBack }) {
  const [restaurant, setRestaurant] = useState(null);
  const [produce, setProduce] = useState([]);

  useEffect(() => {
    async function fetchRestaurant() {
      try {
        // Get restaurant details
        const docRef = doc(db, "Restaurants", restaurantId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setRestaurant(docSnap.data());
        } else {
          console.log("No such restaurant!");
        }
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      }
    }

    async function fetchProduce() {
      try {
        // Get produce subcollection
        const produceRef = collection(
          db,
          `Restaurants/${restaurantId}/produce`
        );
        const produceSnap = await getDocs(produceRef);

        const produceList = produceSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProduce(produceList);
      } catch (error) {
        console.error("Error fetching produce:", error);
      }
    }

    fetchRestaurant();
    fetchProduce();
  }, [restaurantId]);

  if (!restaurant) return <p>Loading restaurant details...</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{restaurant.name}</h1>
      <h2 className="text-lg font-semibold mt-4">Available Produce:</h2>

      {produce.length > 0 ? (
        <ul className="list-disc pl-5 mt-2">
          {produce.map((item) => (
            <li key={item.id} className="mt-1">
              {item.name} - ${item.price_per_unit} per unit ({item.quantity}{" "}
              available)
            </li>
          ))}
        </ul>
      ) : (
        <p>No produce available for this restaurant.</p>
      )}

      {/* Button to go back */}
      <button
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
        onClick={onBack} // Call parent function to go back
      >
        Back to Restaurants
      </button>
    </div>
  );
}

export default RestaurantProduce;
