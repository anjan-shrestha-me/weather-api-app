const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1";

export async function getCurrentWeather(city) {
  const response = await fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return await response.json();
}
export async function getWeatherByLocation(lat, lon) {
  const response = await fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=3&aqi=yes`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch location weather.");
  }

  return response.json();
}