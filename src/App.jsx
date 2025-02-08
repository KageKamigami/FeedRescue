import { Link } from "react-router-dom"; // Import Link
import HomePageBanner from "./assets/FoodBeachBanner.png";
import { GlobeHemisphereWest, Users, Storefront } from "@phosphor-icons/react";

function App() {
  return (
    <>
      {/*NAVBAR*/}
      <nav className="flex justify-center p-8 bg-blue-400 text-white">
        <div className="text-2xl">Food Rescue</div>
        <div className="w-1/2 flex justify-end gap-8 text-2xl">
          <Link to="/">Home</Link>
          <Link to="/FindFood">Find Food</Link>
          <Link to="/SignIn">Sign In</Link>
          <Link to="/RestaurantForm">Restaurant Form</Link>
          <Link to="/ShipmentOrders" >Shipment</Link>
          <Link to="/Test">Test</Link>
        </div>
      </nav>

      {/*NEW BANNER*/}
      <div className="flex h-140 items-start justify-center flex-col w-3/5 ml-52 pb-28">
        <h1 className="text-8xl font-bold pb-8">
          A marketplace for surplus produce and leftovers.
        </h1>
        <h2 className="text-2xl font-light w-4/6 pl-4">
          We connect people to local shops perfectly good leftover produce at
          discounted prices for pickup or delivery
        </h2>
      </div>

      {/*HOW IT WORKS*/}
      <div className="relative h-[450px]">
        <img
          src={HomePageBanner}
          className="w-screen h-full object-cover"
          alt="Food Rescue Banner"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center bg-black/50 p-4">
          <h1 className="text-5xl font-bold w-3/5">How it works</h1>
          <div className="flex justify-center gap-16">
            <h2 className="mt-2 w-1/4 flex justify-center flex-col items-center">
              <Storefront size={200} color="#ffffff" />
              Shops list their perfectly good leftover produce
            </h2>
            <h2 className="mt-2 w-1/4 flex justify-center flex-col items-center">
              <Users size={200} color="#ffffff" />
              Purchase it on our platform at 50% cheaper for pickup
            </h2>
            <h2 className="mt-2 w-1/4 flex justify-center flex-col items-center">
              <GlobeHemisphereWest size={200} color="#ffffff" />
              We all reduce food waste and contribute to a greener planet
            </h2>
          </div>
        </div>
      </div>

      {/******************************************************************************************************************************/}

      {/*JOIN THE PARTY INFO*/}
      <div className="flex flex-col items-center m-10 w-full">
        <div className="w-3/5">
          <h1 className="text-left font-black text-blue-400 text-6xl pb-5">
            Join the party
          </h1>
          <h2 className="text-lg">
            Let us know how you want to use the platform and we'll get you set
            up
          </h2>
          <div className="flex items-center justify-center gap-60">
            <div className="w-2/5 flex flex-col items-center justify-center">
              <h1 className="text-5xl font-black pb-4">Become a partner</h1>
              <h2 className="text-2xl text-center pb-2">
                Salvage revenue, reach new customers, and reduce food waste.
              </h2>
              <Link className="text-2xl text-blue-400 underline" to="/SignIn">
                Sign up your shop
              </Link>
            </div>
            <div className="w-2/5 flex flex-col items-center justify-center">
              <h1 className="text-5xl font-black pb-4">Get the app</h1>
              <h2 className="text-2xl text-center pb-2">
                Browse quality local produce at 50% OFF or more. Start saving
                today.
              </h2>
              <Link className="text-2xl text-blue-400 underline" to="/SignIn">
                Download the app
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
