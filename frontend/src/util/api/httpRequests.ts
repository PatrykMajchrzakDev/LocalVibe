import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();

// FETCH CURRENT WEATHER
export async function fetchWeatherInformation(
  latitude: number,
  longtitude: number
) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longtitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,cloud_cover,wind_speed_10m&daily=&timezone=auto&forecast_days=1`
    );
    const weather = await response.json();
    return weather;
  } catch (error) {
    console.error("Couldn't get current weather", error);
  }
}

//FETCH USER LOCATION
export async function fetchUserLocation() {
  try {
    const response = await fetch("https://ipapi.co/json");
    const location = await response.json();
    return location;
  } catch (error) {
    console.error("Error fetching user location", error);
  }
}
