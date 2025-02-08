import { Link } from "react-router-dom"; // Import Link
import HomePageBanner from "./assets/FoodBeachBanner.png";
import {
  GlobeHemisphereWest,
  Users,
  Storefront,
  Carrot,
  Grains,
  Orange,
  Egg,
  Bread,
  Cheese,
  CoffeeBean,
  Hamburger,
} from "@phosphor-icons/react";

function App() {
  return (
    <>
      {/*NAVBAR*/}
      {/* <nav className="flex justify-center p-4 bg-blue-400 text-white">
        <div className="text-2xl hover:bg-black hover:text-white h-full w-full text-center transition duration-200">Food Rescue</div>
        <div className="w-1/2 flex justify-end gap-8 text-2xl">
          <Link to="/">Home</Link>
          <Link to="/FindFood">Find Food</Link>
        </div>
      </nav> */}

      <nav className="flex justify-evenly bg-white h-20 w-full fixed top-0 shadow-lg border-none">
        <div className="flex items-center justify-center hover:bg-black hover:text-white h-full w-full text-2xl text-center transition duration-200">Food Rescue</div> 
        <Link to="/" className="flex items-center justify-center hover:bg-black hover:text-white h-full w-full text-2xl text-center transition duration-200">Home</Link>
        <Link to="/FindFood" className="flex items-center justify-center hover:bg-black hover:text-white h-full w-full text-2xl text-center transition duration-200">Find Food</Link>
        <Link to="/SignIn" className="flex items-center justify-center hover:bg-black hover:text-white h-full w-full text-2xl text-center transition duration-200">Sign In</Link>
      </nav>

      {/*NEW BANNER*/}
      <div className="flex h-150 pt-20 items-start justify-start flex-col w-4/6 ml-20 ">
        
        <h1 className="text-8xl text-left font-bold pt-10 pb-10">
          FeedRescue 
          
        </h1>

        <h1 className="text-8xl font-bold pt-3 pb-10">
          A marketplace for surplus produce and leftovers
        </h1>
        <h2 className="text-2xl font-light w-5/6 pl-4">
        Every day food waste fills landfills harming the planet. FeedRescue redirects produce scraps to local farmers, cutting waste, supporting small businesses and fueling sustainable food systems. Join us!
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
              Find the perfect Charity for you
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

      {/* OUR MISSION */}
      <div className="flex h-120 items-center justify-center flex-col w-full ">
        <h1 className="text-8xl font-bold pt-10 pb-10">
          Our Mission.
        </h1>
        <h2 className="text-2xl font-light w-5/6 pl-4">
        Every day, our households and businesses contribute to carbon emissions through food waste—perfectly good scraps like lettuce, tomatoes, cucumbers, and carrots end up in landfills, adding to environmental harm. But what if we could turn that waste into a solution?
        At FeedRescue, we connect local restaurants, grocery stores, and households with nearby farmers in need. Instead of tossing produce scraps, we redirect them to support livestock, reduce waste, and strengthen local food systems. By joining FeedRescue, you’re not just cutting down on waste—you’re fueling sustainable farming, helping small businesses thrive, and promoting a healthier, more responsible food cycle.
        s transform waste into opportunity. Join FeedRescue today and be part of the change!
        </h2>
      </div>

      {/******************************************************************************************************************************/}

      {/*JOIN THE PARTY INFO*/}
      <div className="flex flex-col items-center m-10 w-full">
        <div className="w-3/5">
          <h1 className="text-8xl font-bold pt-10 pb-10">
            Join the party
          </h1>
          <h2 className="text-lg">
            Let us know how you want to use the platform and we'll get you set
            up
          </h2>
          <div className="flex items-center justify-center gap-30 w-full">
            
            <div className="w-full h-100 flex flex-col items-center justify-start pt-10 p-2 rounded-lg border-red-500 bg-[#e3f2fd]">
              <h1 className="text-5xl font-black pb-4">Become a partner</h1>
              <h2 className="text-2xl text-center pb-2">
                Salvage revenue, reach new customers, and reduce food waste.
              </h2>
              {/* <Link className="text-2xl text-blue-400 underline" to="/SignIn">
                Become a Participating Shop
              </Link> */}
              <button className="text-2xl w-100 h-15 bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-600 transform hover:scale-105 transition duration-200">
                Become a Participating Shop
              </button>
            </div>
            
            <div className="w-full h-100 flex flex-col items-center justify-start pt-10 p-2 rounded-lg border-red-500 bg-[#e3f2fd]">
              <h1 className="text-5xl font-black pb-4">Get the app</h1>
              <h2 className="text-2xl text-center pb-2">
                Browse quality local produce at 50% OFF or more. Start saving
                today.
              </h2>
              <button className="text-2xl w-100 h-15 bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-600 transform hover:scale-105 transition duration-200">
                Download the app
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



export default App;
