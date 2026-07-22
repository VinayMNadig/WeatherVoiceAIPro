import { FaSmog } from "react-icons/fa";

function AQICard({ weather }) {

  if (!weather) return null;

  const aqi = weather.aqi || 45;

  let status = "Good";
  let color = "bg-green-500";

  if (aqi > 50) {
    status = "Moderate";
    color = "bg-yellow-500";
  }

  if (aqi > 100) {
    status = "Poor";
    color = "bg-red-500";
  }

  return (

    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300">

      <div className="flex items-center gap-5">

        <FaSmog className="text-6xl text-cyan-400"/>

        <div>

          <h2 className="text-3xl text-white font-bold">
            Air Quality
          </h2>

          <p className="text-slate-300">
            Current AQI
          </p>

        </div>

      </div>

      <h1 className="text-7xl text-white font-bold mt-8">
        {aqi}
      </h1>

      <div className="w-full h-4 rounded-full bg-white/20 mt-8">

        <div
          className={`${color} h-4 rounded-full`}
          style={{ width: `${Math.min(aqi,150)/1.5}%` }}
        />

      </div>

      <div className={`${color} inline-block px-5 py-2 rounded-full mt-6 text-white font-semibold`}>
        {status}
      </div>

    </div>

  );

}

export default AQICard;