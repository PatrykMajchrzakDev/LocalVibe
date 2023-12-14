import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();

// FETCH CURRENT WEATHER
export async function fetchWeatherDetails(latitude: number, longitude: number) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m,surface_pressure&daily=&timezone=auto&forecast_days=1`
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
