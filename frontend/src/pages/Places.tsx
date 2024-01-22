import { useEffect, useState } from "react";
import PlacesItem from "../components/Places/PlacesItem";
import Place from "../types/Place";
import Map from "../components/UI/Map/Map";
const Places = () => {
  const [placesList, setPlacesList] = useState<Place[]>([]);
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

  console.log(placesList);
  return (
    <main>
      {/* Left side options */}
      <div className="h-[14vh] bg-defaultGray border-[1px] border-b-bordersColor"></div>
      {/* Places Items */}
      <section className="flex">
        <div className="h-[86vh] w-[15%] bg-defaultGray">Filters</div>
        <div className="w-[45%] bg-gray-400">
          {placesList.map((place) => (
            <PlacesItem key={place.displayName.text} place={place} />
          ))}
        </div>
        <div className="w-[40%] h-[vh]">
          {placesList.length > 0 && (
            <Map
              places={placesList}
              center={{
                lat: placesList[0].location.latitude,
                lng: placesList[0].location.longitude,
              }}
              zoom={11}
            />
          )}
        </div>
      </section>
    </main>
  );
};

export default Places;
