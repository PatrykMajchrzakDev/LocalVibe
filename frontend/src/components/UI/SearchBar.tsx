import { Form } from "react-router-dom";
const SearchBar = () => {
  return (
    <Form
      action="GET ITEMS FROM DB VIA ITS ITEMS"
      method="GET"
      className="w-full flex"
    >
      <div className="h-9 rounded-l-md bg-white flex items-center">
        <label htmlFor="searchbar-description">
          <input
            type="text"
            name="searchbar-description"
            className="h-7 px-2 text-black"
          />
        </label>
      </div>
      <div className="h-9 bg-white flex items-center">
        <label htmlFor="searchbar-location">
          <input type="text" name="searchbar-location" className="h-7 px-2 focus:outline-none" />
        </label>
      </div>
      <div className="w-9 h-9 bg-red-500 flex items-center justify-center">
        <button type="submit" className="w-8 h-8">
          <i className="fa-solid fa-magnifying-glass text-white"></i>
        </button>
      </div>
    </Form>
  );
};

export default SearchBar;
