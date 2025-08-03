import { City } from "../page";

interface ISearchProps {
  searchInput: string;
  fetchCities: City[];
  setSearchInput: (value: string) => void;
}

const Search: React.FC<ISearchProps> = ({
  setSearchInput,
  searchInput,
  fetchCities,
}) => {
  const handleSearchCities = (inputValue: string) => {
    setSearchInput(inputValue);
  };

  return (
    <div className="text-black">
      <div className="w-full flex p-3 gap-2 bg-gradient-to-r from-indigo-100 to-indigo-300 shadow-2xl rounded">
        <input
          placeholder="Enter City Name (Eg:- , Stuttgart ,Göppingen .. )"
          type="text"
          value={searchInput}
          className="w-full text-black rounded p-2 bg-white"
          onChange={(e) => {
            handleSearchCities(e.target.value);
          }}
        />
        <button className="w-44 h-12 rounded font-bold text-white bg-gradient-to-r from-blue-300 to-indigo-600 cursor-pointer  ">
          + Add Widget
        </button>
      </div>
      <div className="absolute z-10 rounded-2xl m-2 w-60 ">
        {fetchCities && fetchCities.length > 0 ? (
          <ul className="">
            {fetchCities?.map((city, index) => (
              <li
                key={index}
                className="cursor-pointer hover:bg-amber-200"
                onClick={() => setSearchInput(city?.name + "-" + city?.country)}
              >
                {city?.name}, {city?.country}
              </li>
            ))}
          </ul>
        ) : (
          <h1>No results found</h1>
        )}
      </div>
    </div>
  );
};

export default Search;
