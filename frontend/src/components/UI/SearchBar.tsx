import { useState, useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";
import UserLocation from "../../types/UserLocation";

interface QueryParams {
  find_desc?: string;
  find_loc?: string;
}
const SearchBar: React.FC<{ userLocation: UserLocation | null }> = ({
  userLocation,
}) => {
  const navigate = useNavigate();

  const [userLocationInput, setUserLocationInput] = useState(
    userLocation ? `${userLocation.city}, ${userLocation.country_name}` : ""
  );

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setUserLocationInput(() =>
      userLocation ? `${userLocation.city}, ${userLocation.country_name}` : ""
    );
  }, [userLocation]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const queryParams: QueryParams = {};

    if (searchInput.trim() !== "") {
      queryParams.find_desc = searchInput.trim();
    }

    if (userLocationInput.trim() !== "") {
      queryParams.find_loc = userLocationInput.trim();
    }

    navigate(
      `/places/search?find_desc=${encodeURIComponent(
        searchInput
      )}&find_loc=${encodeURIComponent(userLocationInput)}`,
      { replace: true }
    );
  };
  return (
    //FORM to easily get data from inputs. 3 main sections in form. 2 inputs and button
    <Form className="w-full flex" onSubmit={handleFormSubmit}>
      {/* 1st section - input */}
      <div className="h-12 rounded-l-sm bg-white flex items-center flex-grow text-lg">
        <label htmlFor="searchbar-description" className="w-full">
          <input
            type="text"
            name="searchbar-description"
            className="h-7 px-2 text-black focus:outline-none border-r-2 border-r-gray-300 w-full"
            placeholder="Restaurants, parks, shops"
            onChange={(e) => setSearchInput(e.target.value)}
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
            value={userLocationInput}
            onChange={(e) => setUserLocationInput(e.target.value)}
          />
        </label>
      </div>
      {/* 3rd section - search button */}
      <div className="px-3 bg-red-500 flex items-center justify-center text-lg border-solid border-white border-2">
        <button type="submit" className="w-8 h-8">
          <i className="fa-solid fa-magnifying-glass text-white"></i>
        </button>
      </div>
    </Form>
  );
};

export default SearchBar;
