function FindFood() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about fetty page.</p>
      <div class="absolute top-15 right-4 flex items-center border border-gray-300 rounded-lg p-2 w-full max-w-md">
      {/*Below is a the search bar */}
      <input 
        type="text" 
        placeholder="Search..." 
        class="w-full outline-none bg-transparent px-2"
        />
        <button class="text-gray-500 hover:text-blue-700">
        🔍
      </button>
     </div>
    </div>
  );
}
export default FindFood;
