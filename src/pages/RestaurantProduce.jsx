import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function RestaurantProduce({ restaurantId, onBack }) {
  const [restaurant, setRestaurant] = useState(null);
  const [produce, setProduce] = useState([]);
  const [selectedProduce, setSelectedProduce] = useState([]); // Track selected produce
  const navigate = useNavigate(); // Initialize useNavigate

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

  // Handle adding produce to shipment order
  const handleAddToOrder = () => {
    // Navigate to ShipmentOrders page, passing both selected produce and restaurant ID via state
    navigate("/ShipmentOrders", { state: { selectedProduce, restaurantId } });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{restaurant.name}</h1>
      <h2 className="text-lg font-semibold mt-4">Available Produce:</h2>

      {produce.length > 0 ? (
        <ul className="list-disc pl-5 mt-2">
          {produce.map((item) => (
            <li key={item.id} className="mt-1">
              <input
                type="checkbox"
                id={`produce-${item.id}`}
                onChange={() => {
                  // Toggle produce selection
                  setSelectedProduce((prev) =>
                    prev.includes(item.id)
                      ? prev.filter((id) => id !== item.id)
                      : [...prev, item.id]
                  );
                }}
              />
              <label htmlFor={`produce-${item.id}`}>
                {item.name} - ${item.price_per_unit} per unit ({item.quantity}{" "}
                available)
              </label>
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

      {/* Add to order button */}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleAddToOrder} // Navigate to ShipmentOrders page
      >
        Add Shipment to Order
      </button>
    </div>
  );
}

export default RestaurantProduce;
