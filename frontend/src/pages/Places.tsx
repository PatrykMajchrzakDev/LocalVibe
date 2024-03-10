import { useSearchParams } from "react-router-dom";
import PlacesItem from "../components/Places/PlacesItem";
import Place from "../types/Place";
import Map from "../components/Map/MapContainer";
import { useQuery } from "@tanstack/react-query";
import { fetchPlacesData } from "../util/api/httpRequests";
import Spinner from "../components/UI/Spinner";
import PlacesFilters from "@/components/Places/PlacesFilters";
const Places = () => {
  // State to store the places list
  // const [placesList, setPlacesList] = useState<Place[]>([]);

  // Get the search parameters from the URL
  const [searchParams] = useSearchParams();
  const findDesc = searchParams.get("find_desc");
  const findLoc = searchParams.get("find_loc");

  // Fetch places data from the API
  const { data, isLoading } = useQuery<Place[], Error>({
    queryKey: ["places", findDesc, findLoc],
    queryFn: () => fetchPlacesData(findDesc, findLoc),
    staleTime: 300000,
  });

  if (isLoading) {
    return (
      <div className="absolute top-1/2 left-[45%]">
        <Spinner message="Loading list of places..." />
      </div>
    );
  }

  //Entire content rendered via condition
  const content = data && (
    <section className="xl:max-w-7xl mx-auto flex flex-col lg:flex-row">
      {/* Filters */}
      <PlacesFilters />

      {/* List of places */}
      <div className="h-[60vh] lg:h-[80vh] lg:w-[40%] overflow-auto scrollbar-thin scrollbar-track-defaultGray scrollbar-thumb-red-500">
        <div className="text-2xl pl-5 py-5 font-bold border-b-2 border-defaultGray">
          Best {findDesc} w {findLoc}
        </div>

        {data.map((place, index) => (
          <PlacesItem key={place.id} place={place} index={index} />
        ))}
      </div>
      {/* Map section */}
      <div className="h-[60vh] w-full lg:h-[80vh] lg:w-[40%]">
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
  );

  return (
    <main>
      <div className="h-[25vh] sm:h-[14vh] bg-defaultGray border-[1px] border-b-bordersColor"></div>
      {/* Places content */}
      {content}
    </main>
  );
};

export default Places;
