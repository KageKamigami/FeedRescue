import { Link } from "react-router-dom"; // Import Link
import HomePageBanner from "./assets/FoodBeachBanner.png";

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
          <h1 className="text-2xl md:text-4xl font-bold">
            SCHEDULING LEFTOVER FOODS & FOOD DONATION PICKUP IS EASIER THAN EVER
          </h1>
          <h2 className="text-lg md:text-2xl font-bold mt-2">
            Donate your foods today!
          </h2>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
            SCHEDULE A PICKUP TODAY
          </button>
        </div>
      </div>

      {/*HOW DOES IT WORK? INFO*/}
      <div className="flex flex-col items-center m-10">
        <h1 className="text-center font-black text-blue-400 text-4xl pb-10">
          HOW DOES THIS PROCESS WORK?
        </h1>

        <div className="grid grid-cols-2 gap-8 w-1/2">
          {/* PROCESS 1 */}
          <div className="flex">
            <h1 className="text-5xl font-bold pr-4">1</h1>
            <section>
              <p className="font-bold text-2xl pb-4">
                FIRST – SEE IF DONATESTUFF PICKS UP IN YOUR AREA BY ENTERING
                YOUR ZIP CODE.
              </p>
              <p className="font-semibold text-lg">
                We are always looking for new regions to serve, so if you do not
                see your code listed today, try back soon.
              </p>
            </section>
          </div>

          {/* PROCESS 2 */}
          <div className="flex">
            <h1 className="text-5xl font-bold pr-4">2</h1>
            <section>
              <p className="font-bold text-2xl pb-4">
                GREAT NEWS – YOU ARE DIRECTLY ON OUR ROUTE!
              </p>
              <p className="font-semibold text-lg">
                Get ready for convenience when we pick up your donations for a
                great cause – but first…
              </p>
            </section>
          </div>

          {/* PROCESS 3 */}
          <div className="flex">
            <h1 className="text-5xl font-bold pr-4">3</h1>
            <section>
              <p className="font-bold text-2xl pb-4">
                SEE WHICH NONPROFIT ORGANIZATION WILL BENEFIT!
              </p>
              <p className="font-semibold text-lg">
                We partner with local charities that are doing good in your
                area.
              </p>
            </section>
          </div>

          {/* PROCESS 4 */}
          <div className="flex">
            <h1 className="text-5xl font-bold pr-4">4</h1>
            <section>
              <p className="font-bold text-2xl pb-4">
                WHEN DO YOU WANT DONATESTUFF TO PICK UP YOUR DONATION?
              </p>
              <p className="font-semibold text-lg">
                View calendar to determine the best pickup day for you.
              </p>
            </section>
          </div>

          {/* PROCESS 5 */}
          <div className="flex">
            <h1 className="text-5xl font-bold pr-4">5</h1>
            <section>
              <p className="font-bold text-2xl pb-4">
                SECURE YOUR DONATIONS IN BAGS OR BOXES.
              </p>
              <p className="font-semibold text-lg">
                Leave your used goods and clothes for charity at your front
                door.
              </p>
            </section>
          </div>

          {/* PROCESS 6 */}
          <div className="flex">
            <h1 className="text-5xl font-bold pr-4">6</h1>
            <section>
              <p className="font-bold text-2xl pb-4">
                WE COME TO YOU AND PICK UP YOUR DONATION
              </p>
              <p className="font-semibold text-lg">
                On the scheduled date, we will gratefully pick up your donation.
              </p>
            </section>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
