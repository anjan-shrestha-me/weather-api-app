function CurrentWeather({ weather, loading, error }) {
  if (loading) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center shadow-lg">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-sky-600 border-t-transparent"></div>

        <p className="mt-4 text-lg font-semibold text-gray-700">
          Loading weather...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center shadow-lg">
        <h2 className="text-2xl font-bold text-red-600">
          City Not Found
        </h2>

        <p className="mt-3 text-gray-600">
          {error}
        </p>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="h-40 rounded-2xl bg-white p-10 text-center shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700">
          Search for a city
        </h2>

        <p className="mt-3 text-gray-500">
          Weather information will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          {weather.location.name}
        </h2>

        <p className="mt-1 text-gray-500">
          {weather.location.country}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          🕒 Local Time: {weather.location.localtime}
        </p>

        <img
          src={weather.current.condition.icon}
          alt={weather.current.condition.text}
          className="mx-auto mt-5"
        />

        <h1 className="mt-3 text-6xl font-bold text-gray-800">
          {weather.current.temp_c}°
        </h1>

        <p className="mt-2 text-xl text-gray-600">
          {weather.current.condition.text}
        </p>
      </div>
    </div>
  );
}

export default CurrentWeather;