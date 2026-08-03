import {
  WiHumidity,
  WiStrongWind,
  WiBarometer,
  WiThermometer,
  WiSunrise,
  WiSunset,
} from "react-icons/wi";

import WeatherDetailCard from "./WeatherDetailCard";

function WeatherDetails({ weather }) {
  if (!weather) return null;

  const details = [
    {
      icon: <WiThermometer className="text-red-500" />,
      title: "Feels Like",
      value: `${weather.current.feelslike_c}°C`,
    },
    {
      icon: <WiHumidity className="text-blue-500" />,
      title: "Humidity",
      value: `${weather.current.humidity}%`,
    },
    {
      icon: <WiStrongWind className="text-sky-500" />,
      title: "Wind Speed",
      value: `${weather.current.wind_kph} km/h`,
    },
    {
      icon: <WiBarometer className="text-green-500" />,
      title: "Pressure",
      value: `${weather.current.pressure_mb} hPa`,
    },
    {
  icon: <WiSunrise className="text-yellow-500" />,
  title: "Sunrise",
  value: weather.forecast.forecastday[0].astro.sunrise,
},
{
  icon: <WiSunset className="text-orange-500" />,
  title: "Sunset",
  value: weather.forecast.forecastday[0].astro.sunset,
},
  ];

  return (
    <div className="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-4">
      {details.map((detail) => (
        <WeatherDetailCard
          key={detail.title}
          icon={detail.icon}
          title={detail.title}
          value={detail.value}
        />
      ))}
    </div>
  );
}

export default WeatherDetails;