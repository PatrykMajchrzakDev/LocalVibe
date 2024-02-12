import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PlacesItem from "../components/Places/PlacesItem";
import Place from "../types/Place";
import Map from "../components/Map/MapContainer";

const Places = () => {
  // State to store the places list
  const [placesList, setPlacesList] = useState<Place[]>([]);

  // Get the search parameters from the URL
  const [searchParams] = useSearchParams();
  const findDesc = searchParams.get("find_desc");
  const findLoc = searchParams.get("find_loc");

  // Fetch places data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch(
          "http://localhost:3000/places/search?find_desc=mechanik&find_loc=Poznan%2C%20Poland"
        );
        const data = await req.json();
        setPlacesList(data.places);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <main>
      {/* Left side options */}
      <div className="h-[14vh] bg-defaultGray border-[1px] border-b-bordersColor"></div>
      {/* Places Items */}
      <section className="flex">
        <div className="h-[80vh] w-[15%] bg-defaultGray">Filters</div>
        <div className="w-[35%] h-[80vh] overflow-auto scrollbar-thin scrollbar-track-defaultGray scrollbar-thumb-red-500">
          <div className="text-2xl pl-5 py-5 font-bold">
            Best {findDesc} w {findLoc}
          </div>
          {placesList.map((place, index) => (
            <PlacesItem key={place.id} place={place} index={index} />
          ))}
        </div>
        {/* Map section */}
        <div className="w-[50%] h-[80vh]">
          {placesList.length > 0 && (
            <Map
              places={placesList}
              center={{
                lat: placesList[0].location.latitude,
                lng: placesList[0].location.longitude,
              }}
              zoom={12}
            />
          )}
        </div>
      </section>
    </main>
  );
};

export default Places;
