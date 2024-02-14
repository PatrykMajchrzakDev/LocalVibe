import { useSearchParams } from "react-router-dom";
import PlacesItem from "../components/Places/PlacesItem";
import Place from "../types/Place";
import Map from "../components/Map/MapContainer";
import { useQuery } from "@tanstack/react-query";
import { fetchDummyPlacesData } from "../util/api/httpRequests";
const Places = () => {
  // State to store the places list
  // const [placesList, setPlacesList] = useState<Place[]>([]);

  // Get the search parameters from the URL
  const [searchParams] = useSearchParams();
  const findDesc = searchParams.get("find_desc");
  const findLoc = searchParams.get("find_loc");

  // Fetch places data from the API
  const { data } = useQuery<Place[], Error>({
    queryKey: ["dummyPlaces"],
    queryFn: fetchDummyPlacesData,
    staleTime: 300000,
  });

  return (
    <main>
      <div className="h-[14vh] bg-defaultGray border-[1px] border-b-bordersColor"></div>
      {/* Places Items */}
      {data && (
        <section className="flex flex-col md:flex-row">
          {/* Filters */}
          <div className="md:h-[80vh] lg:w-[15%] bg-defaultGray">Filters</div>
          {/* List of places */}

          <div className="h-[60vh] md:h-[80vh] lg:w-[35%]  overflow-auto scrollbar-thin scrollbar-track-defaultGray scrollbar-thumb-red-500">
            <div className="text-2xl pl-5 py-5 font-bold">
              Best {findDesc} w {findLoc}
            </div>

            {data.map((place, index) => (
              <PlacesItem key={place.id} place={place} index={index} />
            ))}
          </div>
          {/* Map section */}
          <div className="h-[60vh] md:h-[80vh] md:w-[50%]">
            {data.length > 0 && (
              <Map
                places={data}
                center={{
                  lat: data[0].location.latitude,
                  lng: data[0].location.longitude,
                }}
                zoom={12}
              />
            )}
          </div>
        </section>
      )}
    </main>
  );
};

export default Places;
