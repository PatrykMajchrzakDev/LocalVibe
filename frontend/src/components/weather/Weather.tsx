import { useEffect, useState } from "react";
import { fetchWeatherDetails } from "../../util/api/httpRequests";
import UserLocation from "../../types/UserLocation";
import WeatherDetailsPanel from "./WeatherDetailsPanel";
import Spinner from "../UI/Spinner";

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
    apparent_temperature: number;
    surface_pressure: number;
  };
}

// This map contains the paths to images
const weatherImageMap: WeatherImageMap = {
  "0": { day: "clear_sky_day.png", night: "clear_night.png" },
  "1": { day: "cloudy_day.png", night: "cloudy_night.png" },
  "2": { day: "rainy.png", night: "rainy.png" },
  "4": { day: "snow_day.png", night: "snow_night.png" },
  "5": {
    day: "thunderstorm.png",
    night: "thunderstorm.png",
  },
};

const Weather: React.FC<{ userLocation: UserLocation | null }> = ({
  userLocation,
}) => {
  const [weatherDetails, setWeatherDetails] = useState<WeatherDetails>({});
  const [weatherImagePath, setWeatherImagePath] = useState("");
  const [errorFetchingWeather, setErrorFetchingWeather] = useState(false);
  const fullImagePath = `/src/assets/imgs/${weatherImagePath}`;
  const [isImageReady, setIsImageReady] = useState(false);

  //Checks if there is prop userLocation and fetches weather details based off users latitude and longitude
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
          setErrorFetchingWeather(true);
          console.error("Could not fetch weather details", error);
        }
      }
    }
    fetchAndSetWeatherDetails();
  }, [userLocation]);

  //switch to return char for map based on gotten weather code from weather api
  const getWeatherCategory = (code: string) => {
    switch (code) {
      case "0":
        return "0";
      case "1":
      case "2":
      case "3":
        return "1";
      case "45":
      case "48":
        return "1";
      case "51":
      case "53":
      case "55":
      case "56":
      case "57":
      case "61":
      case "63":
      case "65":
      case "80":
      case "81":
      case "82":
        return "2";
      case "71":
      case "73":
      case "75":
      case "77":
      case "85":
      case "86":
        return "4";
      case "95":
      case "96":
      case "99":
        return "5";
      default:
        return "1";
    }
  };

  //checks weather code and sets specific image path to weatherImagePath state
  useEffect(() => {
    if (weatherDetails.current) {
      const weatherCode = weatherDetails.current.weather_code.toString();
      const isDay = weatherDetails.current.is_day === 1;

      const weatherCategory = getWeatherCategory(weatherCode);
      const weatherMapping = weatherImageMap[weatherCategory];

      if (weatherMapping) {
        const imagePath = isDay ? weatherMapping.day : weatherMapping.night;
        setWeatherImagePath(imagePath);
        setIsImageReady(true);
      }
    }
  }, [weatherDetails]);
  return (
    <>
      <h4 className="px-3 py-10 text-3xl text-center font-medium">
        Check weather at your place to find best opportunity!
      </h4>
      {!weatherDetails.current && (
        <Spinner message="Fetching weather details..." />
      )}
      {/* Weather details */}
      <div className="flex justify-center items-center flex-col md:flex-row pb-10 xl:max-w-7xl border-b-[1px] border-bordersColor">
        {errorFetchingWeather != false && (
          <div>Sorry, we could not get weather data :(</div>
        )}
        {/* Left section */}
        <div className="w-1/3 flex flex-col h-full">
          <div className="flex items-center justify-center ">
            {isImageReady && fullImagePath !== null && (
              <img
                src={fullImagePath}
                alt="current weather pic"
                height={100}
                width={100}
              />
            )}
            {weatherDetails && weatherDetails.current && (
              <p className="text-3xl p-4">
                {weatherDetails.current.temperature_2m}°
              </p>
            )}
          </div>
          <div className="mx-auto text-2xl">
            {userLocation && (
              <p>
                {userLocation.country}, {userLocation.city}
              </p>
            )}
          </div>
        </div>
        {/* Right section */}
        {weatherDetails.current && (
          <div className="w-full flex flex-col md:flex-row md:flex-wrap p-8">
            <WeatherDetailsPanel
              desc={"Humidity"}
              value={weatherDetails.current.relative_humidity_2m}
              symbol={" %"}
              icon={"fa-solid fa-droplet"}
            />
            <WeatherDetailsPanel
              desc={"Feels like"}
              value={weatherDetails.current.apparent_temperature}
              symbol={" °"}
              icon={"fa-solid fa-temperature-high"}
            />
            <WeatherDetailsPanel
              desc={"Air pressure"}
              value={Math.round(weatherDetails.current.surface_pressure)}
              symbol={" hPa"}
              icon={"fas fa-tachometer-alt"}
            />
            <WeatherDetailsPanel
              desc={"Wind speed"}
              value={weatherDetails.current.wind_speed_10m}
              symbol={" km/h"}
              icon={"fa-solid fa-wind"}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;
