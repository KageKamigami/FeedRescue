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

function FindFood() {
  return (
    <>
      <div className="fixed rounded bg-[#DDC9B2] p-4 text-xl text-white w-full"></div>
      <img className="h-100 w-full max-w-full" src={CowBanner}></img>
      <div className="gap-12 flex flex-row justify-evenly items-center bg-[#DDC9B2] p-4"></div>
      <div className="bg-[#E8DDD0] h-[200rem]">
        <div className="flex justify-center items-center gap-12 p-8">
          <div className="text-center font-semibold">
            <img
              src={Chicken}
              className="w-24 h-24 bg-[#DDC9B2] rounded-lg"
            ></img>
            Chicken
          </div>
          <div className="text-center font-semibold">
            <img
              src={Horse}
              className="w-24 h-24  bg-[#DDC9B2] rounded-lg"
            ></img>
            Horse
          </div>
          <div className="text-center font-semibold">
            <img src={Pig} className="w-24 h-24  bg-[#DDC9B2] rounded-lg"></img>
            Pig
          </div>
          <div className="text-center font-semibold">
            <img
              src={Goat}
              className="w-24 h-24  bg-[#DDC9B2] rounded-lg"
            ></img>
            Goat
          </div>
          <div className="text-center font-semibold">
            <img
              src={Turkey}
              className="w-24 h-24  bg-[#DDC9B2] rounded-lg"
            ></img>
            Turkey
          </div>
          <div className="text-center font-semibold">
            <img src={Cow} className="w-24 h-24  bg-[#DDC9B2] rounded-lg"></img>
            Cow
          </div>
          <div className="text-center font-semibold">
            <img
              src={Sheep}
              className="w-24 h-24  bg-[#DDC9B2] rounded-lg"
            ></img>
            Sheep
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-12">
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

        <div className="m-4 flex items-center justify-center flex-row gap-8">
          <div className="rounded-2xl w-1/4">
            <img src={RestaurantPhoto} className="rounded-2xl"></img>
          </div>

          <div className="rounded-2xl w-1/4">
            <img src={RestaurantPhoto} className=" rounded-2xl"></img>
          </div>

          <div className="rounded-2xl w-1/4">
            <img src={RestaurantPhoto} className=" rounded-2xl"></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default FindFood;
