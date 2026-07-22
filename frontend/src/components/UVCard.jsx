import { FaSun } from "react-icons/fa";

function UVCard({ weather }) {

  if (!weather) return null;

  const uv = weather.uv || 5;

  let level = "Moderate";

  if (uv <= 2) level = "Low";
  if (uv >= 6) level = "High";
  if (uv >= 8) level = "Very High";

  return (

    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300">

      <div className="flex items-center gap-5">

        <FaSun className="text-6xl text-yellow-400"/>

        <div>

          <h2 className="text-3xl font-bold text-white">
            UV Index
          </h2>

          <p className="text-slate-300">
            Sun Exposure
          </p>

        </div>

      </div>

      <h1 className="text-7xl text-white font-bold mt-8">
        {uv}
      </h1>

      <div className="w-full bg-white/20 rounded-full h-4 mt-8">

        <div
          className="bg-yellow-400 h-4 rounded-full"
          style={{
            width: `${Math.min(uv,10)*10}%`
          }}
        />

      </div>

      <p className="text-white text-xl mt-6 font-semibold">
        {level}
      </p>

    </div>

  );

}

export default UVCard;