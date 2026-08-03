import ForecastCard from "./ForecastCard";

function Forecast({ weather }) {
  if (!weather) {
    return (
      <div className="h-40 rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          3-Day Forecast
        </h2>

        <div className="flex items-center justify-center">
          <p className="text-center text-gray-500">
            Search for a city to view the 3-day forecast.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
        3-Day Forecast
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {weather.forecast.forecastday.map((day) => (
          <ForecastCard
            key={day.date}
            day={day}
          />
        ))}
      </div>
    </div>
  );
}

export default Forecast;