import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { useState } from "react";
import Place from "../../types/Place";

type MapItemProps = {
  place: Place;
  index: number;
  markerColor: string;
};

const MapItem: React.FC<MapItemProps> = ({ place, index, markerColor }) => {
  const [infowindowOpen, setInfowindowOpen] = useState<boolean>(false);
  const [markerRef, marker] = useAdvancedMarkerRef();
  const marketTip =
    markerColor === "bg-red-500" ? "border-t-red-500" : "border-t-blue-500";
  const handleMarkerClick = () => {
    setInfowindowOpen(!infowindowOpen);
  };

  return (
    <>
      <AdvancedMarker
        className={`${markerColor} rounded-lg text-white px-2 py-1 text-sm cursor-pointer`}
        ref={markerRef}
        key={`${place.id}-${markerColor}`}
        position={{
          lat: place.location.latitude,
          lng: place.location.longitude,
        }}
        onClick={() => handleMarkerClick}
      >
        {/* Absolutely positioned triangle under marker to look like a pin */}
        <div
          className={`${marketTip} absolute w-0 h-0 border-solid -translate-x-1/2 border-8 top-[95%] left-1/2 translate border-l-transparent border-b-transparent border-r-transparent`}
        ></div>
        <p>{index + 1}</p>
      </AdvancedMarker>
      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => setInfowindowOpen(!infowindowOpen)}
        >
          <p>{place.displayName.text}</p>
        </InfoWindow>
      )}
    </>
  );
};

export default MapItem;
