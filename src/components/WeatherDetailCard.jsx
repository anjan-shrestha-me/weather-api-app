function WeatherDetailCard({ icon, title, value }) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-md">
      <div className="mb-2 text-4xl">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-gray-700">
        {title}
      </h3>

      <p className="mt-2 text-2xl font-bold">
        {value}
      </p>
    </div>
  );
}

export default WeatherDetailCard;