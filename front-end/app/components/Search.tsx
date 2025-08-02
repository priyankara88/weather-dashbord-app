const Search = () => {
  return (
    <div className="text-black">
      <div className="w-full flex p-3 gap-2 bg-gradient-to-r from-indigo-100 to-indigo-300 shadow-2xl rounded">
        <input
          placeholder="Enter City Name (Eg:- , Stuttgart ,Göppingen .. )"
          type="text"
          className="w-full text-black rounded p-2 bg-white"
        />
        <button className="w-44 h-12 rounded font-bold text-white bg-gradient-to-r from-blue-300 to-indigo-600 cursor-pointer  ">
          + Add Widget
        </button>
      </div>
    </div>
  );
};

export default Search;
