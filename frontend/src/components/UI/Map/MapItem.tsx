import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { useState } from "react";
import Place from "../../../types/Place";

type MapItemProps = {
  place: Place;
};

const MapItem: React.FC<MapItemProps> = ({ place }) => {
  const [infowindowOpen, setInfowindowOpen] = useState<boolean>(false);
  const [markerRef, marker] = useAdvancedMarkerRef();
  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        key={place.displayName.text}
        position={{
          lat: place.location.latitude,
          lng: place.location.longitude,
        }}
        onClick={() => setInfowindowOpen(!infowindowOpen)}
      />
      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => setInfowindowOpen(!infowindowOpen)}
        >
          {`This is ${place.displayName.text}`}
        </InfoWindow>
      )}
    </>
  );
};

export default MapItem;
