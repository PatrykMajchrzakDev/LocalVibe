import { useState, useEffect } from "react";
import Place from "../../types/Place";
import Rating from "../UI/StarRating/Rating";

interface PlacesItemProps {
  place: Place;
  index: number;
}

const PlacesItem: React.FC<PlacesItemProps> = ({ place, index }) => {
  const {
    displayName,
    formattedAddress,
    rating,
    regularOpeningHours,
    photos,
    websiteUri,
    userRatingCount,
  } = place;

  const [todayOpeningHours, setTodayOpeningHours] = useState<string>("");
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

  return (
    <div className="p-5 hover:shadow-shadowListItem">
      <div></div>
      <div>
        <p>
          {index + 1}. {displayName.text}
        </p>
        <div className="flex items-center">
          <Rating rating={rating} />
          <p>{rating}</p>
          <p>({userRatingCount} reviews)</p>
        </div>
        <div>{formattedAddress}</div>
        <div>{todayOpeningHours}</div>
        <div className="">
          <i className="fa-solid fa-link"></i>
          <a className="text-teal-800 px-2" href={`${websiteUri}`}>
            Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlacesItem;
