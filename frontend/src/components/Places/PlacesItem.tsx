import Place from "../../types/Place";

interface PlacesItemProps {
  place: Place;
}

const PlacesItem: React.FC<PlacesItemProps> = ({ place }) => {
  const {
    displayName,
    formattedAddress,
    rating,
    regularOpeningHours,
    photos,
    types,
    websiteUri,
    userRatingCount,
  } = place;
  return <div>
    
  </div>;
};

export default PlacesItem;
