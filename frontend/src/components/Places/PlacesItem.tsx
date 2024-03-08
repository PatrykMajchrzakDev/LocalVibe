import { useState, useEffect } from "react";
import Place from "../../types/Place";
import Rating from "../UI/StarRating/Rating";
import mapPinStore from "../../store/mapPin";
import mapCenterStore from "../../store/mapCenter";

// Props for the PlacesItem component
interface PlacesItemProps {
  place: Place;
  index: number;
}

const PlacesItem: React.FC<PlacesItemProps> = ({ place, index }) => {
  const {
    id,
    displayName,
    formattedAddress,
    rating,
    regularOpeningHours,
    websiteUri,
    userRatingCount,
    location,
  } = place;

  //Map pin store
  const { setHoveredItemId } = mapPinStore();
  const { setSelectedItemId } = mapPinStore();
  const { selectedItemId } = mapPinStore();

  //Map center store
  const { setSelectedItemLocation } = mapCenterStore();

  // State to store today's operating hours
  const [todayOpeningHours, setTodayOpeningHours] = useState<string>("");

  // Set today's operating hours
  useEffect(() => {
    const days = [
      "Sunday", // Start with Sunday to match getDay() indexing
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // Get current day using getDay()
    const currentDate = new Date();
    const currentDay = days[currentDate.getDay()];

    // Find operating hours for today
    const todayOperatingHours = regularOpeningHours?.weekdayDescriptions?.find(
      (day) => day.startsWith(currentDay)
    );

    // Set the state to today's operating hours
    setTodayOpeningHours(todayOperatingHours || "Closed");
  }, [regularOpeningHours?.weekdayDescriptions]);

  // Website URL and alternative text if there is no website
  const onlyDomainRegex = /https?:\/\/([^/\s]+)/;
  const match = websiteUri ? websiteUri.match(onlyDomainRegex) : null;
  const urlDomain = match ? match[1] : "";
  const placeWebsiiteUrl = websiteUri ? (
    <a className="text-teal-800 px-2" href={`${websiteUri}`}>
      ({urlDomain})
    </a>
  ) : (
    <p>This place has no website.</p>
  );

  //Item click handler
  const handleItemClick = () => {
    if (selectedItemId === id) {
      setSelectedItemId(null);
    } else {
      setSelectedItemId(id);
    }
    setSelectedItemLocation(location);
  };
  return (
    <div
      className="flex p-5 hover:shadow-shadowListItem border-b-2 border-defaultGray"
      onMouseEnter={() => setHoveredItemId(id)}
      onMouseLeave={() => setHoveredItemId(null)}
      onClick={handleItemClick}
    >
      <div>
        <p className="font-semibold text-lg pt-2">
          {index + 1}. {displayName.text}
        </p>
        <div className="flex items-center pt-2">
          <Rating rating={rating} />
          <p>{rating}</p>
          <p>({userRatingCount} reviews)</p>
        </div>
        <div className="pt-2">{formattedAddress}</div>
        <div className="pt-2">{todayOpeningHours}</div>
        <div className="pt-2 flex items-center">
          <i className="fa-solid fa-link pr-1 break-words"></i>
          {placeWebsiiteUrl}
        </div>
      </div>
    </div>
  );
};

export default PlacesItem;
