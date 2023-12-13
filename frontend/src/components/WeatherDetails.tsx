import { useEffect, useState } from "react";
import { fetchWeatherDetails } from "../util/api/httpRequests";
import UserLocation from "../types/UserLocation";

type WeatherImageMap = {
  [key: string]: {
    day: string;
    night: string;
  };
};

interface WeatherDetails {
  current: {
    weather_code: number;
    wind_speed_10m: number;
    is_day: number;
    relative_humidity_2m: number;
    temperature_2m: number;
  };
}

// This map contains the paths to images
const weatherImageMap: WeatherImageMap = {
  "0": { day: "clear_sky_day.png", night: "clear_sky_night.png" },
  "1": { day: "partly_cloudy_day.png", night: "partly_cloudy_night.png" },
  // Combine 45 and 48 into category 2
  "2": { day: "fog_day.png", night: "fog_night.png" },
  // Combine 51, 53, 55, 56, 57, 61, 65, 80, 81, 82 into category 63
  "63": { day: "light_rain_day.png", night: "light_rain_night.png" },
  // Combine 71, 75, 77, 85, 86 into category 73
  "73": { day: "light_snow_day.png", night: "light_snow_night.png" },
  "96": {
    day: "slight_thunderstorm_day.png",
    night: "slight_thunderstorm_night.png",
  },
  // Combine 96 and 99 into category 95
  "95": {
    day: "thunderstorm_with_light_hail_day.png",
    night: "thunderstorm_with_light_hail_night.png",
  },
  // Default to category 1 for other codes
  default: { day: "default_day.png", night: "default_night.png" },
};

const WeatherDetails: React.FC<{ userLocation: UserLocation | null }> = ({
  userLocation,
}) => {
  const [weatherDetails, setWeatherDetails] = useState<WeatherDetails>({});
  const [weatherImagePath, setWeatherImagePath] = useState("");
  const [errorFetchingWeather, setErrorFetchingWeather] = useState(false);
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
      } else {
        setErrorFetchingWeather(true);
        return <div>Could not get weather details :(</div>;
      }
    }
    fetchAndSetWeatherDetails();
  }, [userLocation]);
  console.log(weatherDetails);

  const getWeatherCategory = (code) => {
    switch (code) {
      case "45":
      case "48":
        return "2";
      case "51":
      case "53":
      case "55":
      case "56":
      case "57":
      case "61":
      case "65":
      case "80":
      case "81":
      case "82":
        return "63";
      case "71":
      case "75":
      case "77":
      case "85":
      case "86":
        return "73";
      case "96":
      case "99":
        return "95";
      default:
        return "1";
    }
  };

  useEffect(() => {
    if (weatherDetails.current) {
      const weatherCode = weatherDetails.current.weather_code.toString();
      const isDay = weatherDetails.current.is_day === 1;

      const weatherCategory = getWeatherCategory(weatherCode);
      const weatherMapping = weatherImageMap[weatherCategory];

      if (weatherMapping) {
        const imagePath = isDay ? weatherMapping.day : weatherMapping.night;
        setWeatherImagePath(imagePath);
      }
    }
  }, [weatherDetails]);
  return (
    <>
      <div className="xl:max-w-7xl mx-auto h-[500px] flex ">
        <div className="w-full flex flex-col">
          <div className="bg-fuchsia-300 h-[500px] flex items-center justify-center">
            <img src="/src/assets/imgs/sun-clouds-small.png" alt="" />
            {/* I HAVE TO FETCH IT BEFORE IT RENDERS CAUSE IM GETTING ERROR OTHERWISE */}
            {/* <p className="text-3xl">{weatherDetails.current.temperature_2m}°</p> */}
          </div>
          {/* <div>{userLocation.}</div> */}
        </div>

        <div className="w-1/2 bg-orange-300 h-[500px]">
          <div className="w-1/2"></div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;

// Based on this image I want you to create 14 different images as separate files based on this

// "0": { day: "clear_sky_day.png", night: "clear_sky_night.png" },
//   "1": { day: "partly_cloudy_day.png", night: "partly_cloudy_night.png" },
//   // Combine 45 and 48 into category 2
//   "2": { day: "fog_day.png", night: "fog_night.png" },
//   // Combine 51, 53, 55, 56, 57, 61, 65, 80, 81, 82 into category 63
//   "63": { day: "light_rain_day.png", night: "light_rain_night.png" },
//   // Combine 71, 75, 77, 85, 86 into category 73
//   "73": { day: "light_snow_day.png", night: "light_snow_night.png" },
//   "96": {
//     day: "slight_thunderstorm_day.png",
//     night: "slight_thunderstorm_night.png",
//   },
//   // Combine 96 and 99 into category 95
//   "95": {
//     day: "thunderstorm_with_light_hail_day.png",
//     night: "thunderstorm_with_light_hail_night.png",
//   },

//sun
//moon
//day clouds
//night clouds
//rain
//snow
//thunderstorm
