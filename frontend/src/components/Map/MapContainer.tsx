import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Place from "../../types/Place";
import MapItem from "./MapItem";
import mapPinStore from "../../store/mapPin";
interface MapProps {
  places: Place[];
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

const MapContainer: React.FC<MapProps> = ({ places, center, zoom }) => {
  const { hoveredItemId } = mapPinStore();
  return (
    <div className="w-full h-full">
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY as string}>
        <Map
          center={center}
          zoom={zoom}
          mapId={import.meta.env.VITE_GOOGLE_API_MAP_ID as string}
        >
          {places.map((place, index) => (
            <MapItem
              place={place}
              key={place.id}
              index={index}
              markerColor={
                place.id === hoveredItemId ? "bg-red-500" : "bg-blue-500"
              }
            />
          ))}
        </Map>
      </APIProvider>
    </div>
  );
};

export default MapContainer;
