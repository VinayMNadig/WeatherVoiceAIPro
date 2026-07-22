import { FaSun, FaMoon } from "react-icons/fa";

function SunProgress({ weather }) {

  if (!weather) return null;

  const sunrise = weather.sunrise * 1000;
  const sunset = weather.sunset * 1000;
  const now = Date.now();

  let progress = ((now - sunrise) / (sunset - sunrise)) * 100;

  progress = Math.max(0, Math.min(progress, 100));

  function format(time) {
    return new Date(time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (

    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8">

      <h2 className="text-3xl font-bold text-white mb-8">

        Sunrise & Sunset

      </h2>

      <div className="flex justify-between mb-5">

        <div className="text-center">

          <FaSun className="text-yellow-400 text-5xl mx-auto"/>

          <p className="text-white mt-3">

            {format(sunrise)}

          </p>

        </div>

        <div className="text-center">

          <FaMoon className="text-sky-300 text-5xl mx-auto"/>

          <p className="text-white mt-3">

            {format(sunset)}

          </p>

        </div>

      </div>

      <div className="w-full h-4 bg-white/20 rounded-full">

        <div
          className="h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
          style={{ width: `${progress}%` }}
        />

      </div>

      <p className="text-center text-slate-300 mt-4">

        {progress.toFixed(0)}% of daylight completed

      </p>

    </div>

  );

}

export default SunProgress;