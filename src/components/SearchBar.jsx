import { useState } from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";

function SearchBar({ onSearch, onLocation }) {
  const [city, setCity] = useState("");

  function handleSubmit() {
    if (!city.trim()) return;

    onSearch(city);

    setCity("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  return (
  <div className="mx-auto mt-10 max-w-2xl px-4">

    {/* Search Row */}
    <div className="flex gap-3">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-sky-500"
      />

      <button
        onClick={handleSubmit}
        className="flex items-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-white transition hover:bg-sky-700"
      >
        <FiSearch />
        Search
      </button>
    </div>

    {/* My Location Button */}
    <button
      onClick={onLocation}
      className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-sky-600 bg-white px-6 py-3 text-sky-600 transition hover:bg-sky-50"
    >
      <FiMapPin />
      Use My Location
    </button>

  </div>
);
}

export default SearchBar;