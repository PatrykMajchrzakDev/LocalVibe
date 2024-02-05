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
};

const MapItem: React.FC<MapItemProps> = ({ place, index }) => {
  const [infowindowOpen, setInfowindowOpen] = useState<boolean>(false);
  const [markerRef, marker] = useAdvancedMarkerRef();
  return (
    <>
      <AdvancedMarker
        className="bg-blue-500 rounded-lg text-white px-4 py-1 text-sm cursor-pointer "
        ref={markerRef}
        key={place.displayName.text}
        position={{
          lat: place.location.latitude,
          lng: place.location.longitude,
        }}
        onClick={() => setInfowindowOpen(!infowindowOpen)}
      >
        <div className="absolute w-0 h-0 border-solid border-t-blue-500 -translate-x-1/2 border-8 top-full left-1/2 translate border-l-transparent border-b-transparent border-r-transparent"></div>
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
