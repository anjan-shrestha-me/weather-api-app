function ForecastCard({ day }) {
  const date = new Date(day.date);

  const weekday = date.toLocaleDateString("en-US", {
    weekday: "short",
  });

  return (
    <div className="rounded-xl bg-white p-4 text-center shadow-md">
      <h3 className="font-semibold text-gray-700">
        {weekday}
      </h3>

      <img
        src={day.day.condition.icon}
        alt={day.day.condition.text}
        className="mx-auto"
      />

      <p className="mt-2 text-xl font-bold">
        {day.day.maxtemp_c}°C
      </p>

      <p className="text-sm text-gray-500">
        {day.day.condition.text}
      </p>
    </div>
  );
}

export default ForecastCard;