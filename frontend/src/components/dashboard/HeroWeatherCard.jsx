import {
  FaMapMarkerAlt,
  FaTemperatureHigh,
  FaSun,
  FaMoon,
} from "react-icons/fa";

import LiveClock from "../LiveClock";

function HeroWeatherCard({ weather }) {

  if (!weather) return null;

  const icon = `https://openweathermap.org/img/wn/${weather.icon}@4x.png`;

  function formatTime(unix) {
    return new Date(unix * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (

    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[35px] shadow-2xl p-10">

      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

        {/* LEFT */}

        <div className="flex items-center gap-8">

          <img
            src={icon}
            alt={weather.weather}
            className="w-44 h-44 drop-shadow-2xl"
          />

          <div>

            <div className="flex items-center gap-3 text-slate-300 text-xl">

              <FaMapMarkerAlt />

              <span>

                {weather.city}, {weather.country}

              </span>

            </div>

            <h1 className="text-8xl font-black text-white mt-3">

              {Math.round(weather.temperature)}°

            </h1>

            <p className="text-3xl text-cyan-300 capitalize mt-3">

              {weather.description}

            </p>

            <div className="flex items-center gap-3 mt-5">

              <FaTemperatureHigh className="text-red-400" />

              <span className="text-white text-xl">

                Feels Like {Math.round(weather.feels_like)}°C

              </span>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="text-right">

          <LiveClock />

          <div className="flex justify-end gap-10 mt-8">

            <div className="text-center">

              <FaSun className="text-yellow-400 text-4xl mx-auto mb-2" />

              <p className="text-slate-300">

                Sunrise

              </p>

              <h3 className="text-white text-xl font-bold">

                {formatTime(weather.sunrise)}

              </h3>

            </div>

            <div className="text-center">

              <FaMoon className="text-sky-300 text-4xl mx-auto mb-2" />

              <p className="text-slate-300">

                Sunset

              </p>

              <h3 className="text-white text-xl font-bold">

                {formatTime(weather.sunset)}

              </h3>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default HeroWeatherCard;