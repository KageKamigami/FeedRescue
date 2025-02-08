import fettyWap from "../assets/Bag.png"
import{
  MagnifyingGlass


} from "@phosphor-icons/react";
function FindFood() {
  return (
    <>
    <div className="fixed rounded bg-yellow-600 p-4 text-xl text-white w-full"> hii </div>
    <img className = "h-150 w-full max-w-full" src = {fettyWap}></img>
    <div className="border gap-12 flex flex-row justify-evenly items-center bg-yellow-500">
      <h1 className="">About Page</h1>
      <p className="text-2xl font-black">This is the about fetty WAP page.</p>
      <div class=" absolute top-100 left-8 flex items-center border-1 backdrop-blur-xs rounded-xl border-white p-2 w-full max-w-md">
      <p><MagnifyingGlass size={32} color = "#ffffff"/></p>
      {/*Below is a the search bar */}
      <button class="text-black-900 hover:text-black-700">
      <input 
        type="text" 
        placeholder="Search..." 
        class="w-full outline-transparent bg-transparent px-15 py-3 rounded-lg text-white"
        />
      </button>
     </div>
    </div>
    <div classname= "bg-yellow-700">
      <p> MORE Fetty Wap INFO</p>

      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>
      <p> MORE Fetty Wap INFO</p>

    </div>
    </>
  );
}
export default FindFood;
