import { useEffect, useState } from "react";
import { fetchWeatherDetails } from "../util/api/httpRequests";
import UserLocation from "../types/UserLocation";
const WeatherDetails: React.FC<{ userLocation: UserLocation | null }> = ({
  userLocation,
}) => {
  const [weatherDetails, setWeatherDetails] = useState({});
  useEffect(() => {
    async function fetchAndSetWeatherDetails() {
      if (
        userLocation &&
        userLocation.latitude != null &&
        userLocation.longitude != null
      ) {
        try {
          const fetchedWeatherDetails = await fetchWeatherDetails(
            userLocation.latitude,
            userLocation.longitude
          );
          setWeatherDetails(fetchedWeatherDetails);
        } catch (error) {
          console.error("Could not fetch weather details", error);
        }
      }
    }
    fetchAndSetWeatherDetails();
  }, [userLocation]);
  console.log(userLocation);
  return <div>{}</div>;
};

export default WeatherDetails;
