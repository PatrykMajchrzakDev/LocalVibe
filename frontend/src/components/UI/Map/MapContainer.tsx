import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Place from "../../../types/Place";
import MapItem from "./MapItem";

interface MapProps {
  places: Place[];
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

const MapContainer: React.FC<MapProps> = ({ places, center, zoom }) => {
  return (
    <div className="w-full h-full">
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY as string}>
        <Map
          center={center}
          zoom={zoom}
          mapId={import.meta.env.VITE_GOOGLE_API_MAP_ID as string}
        >
          {places.map((place) => (
            <MapItem place={place} key={place.displayName.text} />
          ))}
        </Map>
      </APIProvider>
    </div>
  );
};

export default MapContainer;
