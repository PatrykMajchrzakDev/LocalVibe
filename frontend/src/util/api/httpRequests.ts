import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();

export async function fetchWeatherInformation() {}

export async function fetchUserLocation() {
  try {
    const response = await fetch("https://ipapi.co/json");
    const location = await response.json();
    return location;
  } catch (error) {
    console.error("Error fetching user location", error);
  }
}
