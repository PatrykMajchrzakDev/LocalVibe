import { useEffect, useState } from "react";
import PlacesItem from "../components/Places/PlacesItem";
import Place from "../types/Place";
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
      <div className="h-[14vh] bg-defaultGray border-[1px] border-b-bordersColor"></div>
      <section className="flex">
        <div className="h-[86vh] w-[15%] bg-defaultGray">Filters</div>
        <div className="w-[45%] bg-gray-400">
          {placesList.map((place) => (
            <PlacesItem key={place.displayName.text} place={place} />
          ))}
        </div>
        <div>MAP</div>
      </section>
    </main>
  );
};

export default Places;
