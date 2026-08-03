import { WiDayCloudy } from "react-icons/wi";

function Header() {
  return (
    <header className="bg-sky-600 shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-6 py-5">
        <WiDayCloudy className="text-5xl text-yellow-300" />

        <h1 className="text-3xl font-bold text-white">
          Weather App
        </h1>
      </div>
    </header>
  );
}

export default Header;