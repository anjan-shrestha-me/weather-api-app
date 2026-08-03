import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import {
  getCurrentWeather,
  getWeatherByLocation,
} from "./services/weatherApi";
import Forecast from "./components/Forecast";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(city) {
    try {
      setLoading(true);
      setError("");
      setWeather(null);

      const data = await getCurrentWeather(city);

      setWeather(data);
    } catch (error) {
      console.error(error);

      setError("City not found. Please try another city.");
    } finally {
      setLoading(false);
    }
  }
  async function handleLocation() {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          setLoading(true);
          setError("");

          const { latitude, longitude } = position.coords;

          const data = await getWeatherByLocation(
            latitude,
            longitude
          );

          setWeather(data);
        } catch (error) {
          setError("Unable to fetch weather.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Location permission denied.");
      }
    );
  }

  return (
    <div className="min-h-screen bg-sky-100">
      <Header />

      <SearchBar
        onSearch={handleSearch}
        onLocation={handleLocation}
      />

      <div className="mx-auto mt-8 max-w-7xl px-4">
        <div className="grid items-start gap-6 lg:grid-cols-2">

          {/* Left Column */}
          <div className="space-y-6">
            <CurrentWeather
              weather={weather}
              loading={loading}
              error={error}
            />

            <WeatherDetails weather={weather} />
          </div>

          {/* Right Column */}
          <Forecast weather={weather} />

        </div>
      </div>
    </div>
  );
}
export default App;