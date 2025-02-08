import { Link } from "react-router-dom"; // Import Link
import "./App.css";
import HomePageBanner from "./assets/BeachFoodBanner.png";

function App() {
  return (
    <>
      {/*NAVBAR*/}
      <nav className="flex justify-evenly m-5">
        <div>Food Rescue</div> <Link to="/">Home</Link>
        <Link to="/about">About</Link> Sign In
      </nav>

      {/*BANNER*/}
      <div className="relative w-screen h-[400px]">
        <img
          src={HomePageBanner}
          className="w-screen h-full object-cover"
          alt="Food Rescue Banner"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center bg-black/50 p-4">
          <h1 className="text-2xl md:text-4xl font-bold w-2/5">
            SCHEDULING LEFTOVER FOODS & FOOD DONATION PICKUP IS EASIER THAN EVER
          </h1>
          <h2 className="text-lg md:text-2xl font-bold mt-2">
            Donate your foods today!
          </h2>
          <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
            SCHEDULE A PICKUP TODAY
          </button>
        </div>
      </div>

      {/*HOW DOES IT WORK? INFO*/}
      <h1 className="text-blue-400 text-center">HOW DOES THIS PROCESS WORK?</h1>

      <div className="flex justify-center items-center flex-col border border-red-500">
        {" "}
        <section className="flex justify-center items-center flex-col">
          <h2 className="left-0">1</h2>
          <p>
            FIRST – SEE IF DONATESTUFF PICKS UP IN YOUR AREA BY ENTERING YOUR
            ZIP CODE.
          </p>
          <p>
            We are always looking for new regions to serve, so if you do not see
            your code listed today, try back soon.
          </p>
        </section>
      </div>
    </>
  );
}

export default App;
