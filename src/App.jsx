import { Link } from "react-router-dom"; // Import Link
import HomePageBanner from "./assets/FoodBeachBanner.png";

function App() {
  return (
    <>
      {/*NAVBAR*/}
      <nav className="flex justify-evenly m-5">
        <div>Food Rescue</div> <Link to="/">Home</Link>
        <Link to="/FindFood">Find Food</Link>
        <Link to="/SignIn">Sign In</Link>
      </nav>

      {/*BANNER*/}
      <div className="relative h-[400px]">
        <img
          src={HomePageBanner}
          className="w-screen h-full object-cover"
          alt="Food Rescue Banner"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center bg-black/50 p-4">
          <h1 className="text-5xl font-bold w-3/5">
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

      {/******************************************************************************************************************************/}

      {/*HOW DOES IT WORK? INFO*/}
      <div className="flex flex-col items-center m-10">
        <h1 className="text-center font-black text-blue-400 text-4xl pb-10">
          HOW DOES THIS PROCESS WORK?
        </h1>

        <div className="grid grid-cols-2 gap-8 w-1/2">
          {/* STEP 1 */}
          <div className="flex">
            <h1 className="text-5xl font-bold pr-4">1</h1>
            <section>
              <p className="font-bold text-2xl pb-4">
                CHECK IF LIVESTOCK OWNERS ARE LOOKING FOR PRODUCE NEAR YOU.
              </p>
              <p className="font-semibold text-lg">
                Enter your location to see nearby farmers and livestock owners
                looking to buy excess produce and food waste.
              </p>
            </section>
          </div>

          {/* STEP 2 */}
          <div className="flex">
            <h1 className="text-5xl font-bold pr-4">2</h1>
            <section>
              <p className="font-bold text-2xl pb-4">
                GREAT NEWS - YOUR PRODUCE CAN BE REPURPOSED!
              </p>
              <p className="font-semibold text-lg">
                Instead of throwing away leftovers, you can sell them directly
                to farmers who will use them to feed their livestock.
              </p>
            </section>
          </div>

          {/* STEP 3 */}
          <div className="flex">
            <h1 className="text-5xl font-bold pr-4">3</h1>
            <section>
              <p className="font-bold text-2xl pb-4">
                SEE WHICH LIVESTOCK OWNERS NEED YOUR EXCESS PRODUCE.
              </p>
              <p className="font-semibold text-lg">
                We connect you with farmers in need of food scraps, ensuring
                your waste gets repurposed efficiently.
              </p>
            </section>
          </div>

          {/* STEP 4 */}
          <div className="flex">
            <h1 className="text-5xl font-bold pr-4">4</h1>
            <section>
              <p className="font-bold text-2xl pb-4">
                SCHEDULE A PICKUP OR DROP-OFF FOR YOUR LEFTOVER PRODUCE.
              </p>
              <p className="font-semibold text-lg">
                Choose a convenient time for pickup or arrange a drop-off at a
                nearby farm. Flexible scheduling makes the process easy.
              </p>
            </section>
          </div>

          {/* STEP 5 */}
          <div className="flex">
            <h1 className="text-5xl font-bold pr-4">5</h1>
            <section>
              <p className="font-bold text-2xl pb-4">
                PACKAGE YOUR LEFTOVER PRODUCE FOR COLLECTION.
              </p>
              <p className="font-semibold text-lg">
                Secure your excess produce in bins or containers. Label them
                clearly so farmers know what they're picking up.
              </p>
            </section>
          </div>

          {/* STEP 6 */}
          <div className="flex">
            <h1 className="text-5xl font-bold pr-4">6</h1>
            <section>
              <p className="font-bold text-2xl pb-4">
                CONNECT, SELL, AND SUPPORT SUSTAINABILITY.
              </p>
              <p className="font-semibold text-lg">
                Farmers collect your leftover produce, reducing waste and
                supporting sustainable livestock feeding. You earn extra revenue
                while making an impact!
              </p>
            </section>
          </div>
        </div>

        {/*WHAT CAN I DONATE? INFO*/}
        <div className="flex flex-col gap-1 mt-6 w-3/6">
          <h1 className="text-center font-black text-blue-400 text-4xl pb-5">
            WHAT CAN I DONATE?
          </h1>
          <div>
            <p className="text-xl font-semibold text-center">
              Feed Rescue accepts these items:
            </p>

            {/* ACCEPTED 1 */}
            <p className="font-bold text-3xl text-blue-400 py-4">
              Fruits & Vegetables
            </p>
            <div className="flex flex-col items-start">
              <ul className="grid grid-cols-2 list-disc list-inside text-lg font-semibold w-3/4 text-left">
                <li>Apples (without seeds)</li>
                <li>Carrots</li>
                <li>Squash & Pumpkins</li>
                <li>Leafy greens (lettuce, kale, spinach)</li>
                <li>Cucumbers</li>
                <li>Watermelon</li>
                <li>Bananas (including peels)</li>
                <li>Berries</li>
              </ul>
            </div>

            {/* ACCEPTED 2 */}
            <p className="font-bold text-3xl text-blue-400 py-4">
              Grains & Bread
            </p>
            <div className="flex flex-col items-start">
              <ul className="grid grid-cols-2 list-disc list-inside text-lg font-semibold w-3/4 text-left">
                <li>Oats</li>
                <li>Barley</li>
                <li>Corn</li>
                <li>Rice</li>
              </ul>
            </div>

            {/* ACCEPTED 3 */}
            <p className="font-bold text-3xl text-blue-400 py-4">
              Protein Sources
            </p>
            <div className="flex flex-col items-start">
              <ul className="grid grid-cols-2 list-disc list-inside text-lg font-semibold w-3/4 text-left">
                <li>Cooked eggs</li>
                <li>Legumes (peas, lentils)</li>
                <li>Mealworms & insects (for chickens)</li>
              </ul>
            </div>
          </div>
        </div>

        {/******************************************************************************************************************************/}

        {/*WHAT CAN'T I DONATE? INFO*/}
        <div className="flex flex-col gap-1 mt-6 w-3/6">
          <h1 className="text-center font-black text-red-400 text-4xl pb-5">
            WHAT CAN'T I DONATE?
          </h1>
          <div>
            <p className="text-xl font-semibold text-center">
              Feed Rescue rejects these items:
            </p>

            {/*REJECTED 1*/}
            <div>
              <section>
                <p className="font-bold text-2xl text-red-400 py-4 text-left">
                  Toxic Fruits & Veggies
                </p>
                <p className="font-semibold text-lg text-left">
                  Avocados (toxic to most animals) Onions & Garlic (cause anemia
                  in many livestock) Potato peels & green potatoes (contain
                  solanine, toxic to most) Tomato & Pepper leaves (contain
                  solanine) Rhubarb leaves (contain oxalates, toxic) Cherry,
                  Peach, & Apricot pits (contain cyanide)
                </p>
              </section>
            </div>

            {/*REJECTED 2*/}
            <div>
              <section>
                <p className="font-bold text-2xl text-red-400 py-4 text-left">
                  Dangerous Grains & Bread
                </p>
                <p className="font-semibold text-lg text-left">
                  Moldy bread or grains (can cause illness) Uncooked beans
                  (contain toxins)
                </p>
              </section>
            </div>

            {/*REJECTED 3*/}
            <div>
              <section>
                <p className="font-bold text-2xl text-red-400 py-4 text-left">
                  Dairy & Meat (for herbivores like cows, goats, and sheep){" "}
                </p>
                <p className="font-semibold text-lg text-left">
                  No large amounts of milk or cheese (can cause digestion
                  issues) No meat or bones (herbivores cannot digest them)
                </p>
              </section>
            </div>

            {/*REJECTED 4*/}
            <div>
              <section>
                <p className="font-bold text-2xl text-red-400 py-4 text-left">
                  Other Harmful Foods
                </p>
                <p className="font-semibold text-lg text-left">
                  Chocolate (toxic to most animals) Coffee & Caffeine (dangerous
                  for all livestock) Processed foods (chips, candy, junk food)
                  Anything moldy or rotten
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
