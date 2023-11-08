import { Form } from "react-router-dom";
const SearchBar = () => {
  return (
    //FORM to easily get data from inputs. 3 main sections in form. 2 inputs and button
    <Form
      action="GET ITEMS FROM DB VIA ITS ITEMS"
      method="GET"
      className="w-full flex"
    >
      {/* 1st section - input */}
      <div className="h-12 rounded-l-sm bg-white flex items-center flex-grow text-lg">
        <label htmlFor="searchbar-description" className="w-full">
          <input
            type="text"
            name="searchbar-description"
            className="h-7 px-2 text-black focus:outline-none border-r-2 border-r-gray-300 w-full"
            placeholder="Restaurants, parks, shops"
          />{" "}
        </label>
      </div>
      {/* 2nd section - input */}
      <div className="h-12 bg-white flex items-center flex-grow text-lg">
        <label htmlFor="searchbar-location" className="w-full">
          <input
            type="text"
            name="searchbar-location"
            className="h-7 px-2 focus:outline-none w-full"
            placeholder="Location"
          />
        </label>
      </div>
      {/* 3rd section - search button */}
      <div className="w-12 h-12 bg-red-500 flex items-center justify-center text-lg">
        <button type="submit" className="w-8 h-8">
          <i className="fa-solid fa-magnifying-glass text-white"></i>
        </button>
      </div>
    </Form>
  );
};

export default SearchBar;
