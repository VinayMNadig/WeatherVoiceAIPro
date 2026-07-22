import {
  FaSun,
  FaCloudSun,
  FaMoon,
} from "react-icons/fa";

function WeatherTimeline({ weather }) {

  if (!weather) return null;

  return (

    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8">

      <h2 className="text-3xl font-bold text-white mb-8">

        Today's Timeline

      </h2>

      <div className="flex justify-between items-center flex-wrap gap-6">

        <div className="text-center">

          <FaSun className="text-yellow-400 text-5xl mx-auto"/>

          <h3 className="text-white mt-3 font-bold">

            Sunrise

          </h3>

          <p className="text-slate-300">

            {weather.sunrise}

          </p>

        </div>

        <div className="flex-1 h-1 bg-yellow-400 rounded-full"/>

        <div className="text-center">

          <FaCloudSun className="text-orange-400 text-5xl mx-auto"/>

          <h3 className="text-white mt-3 font-bold">

            Afternoon

          </h3>

          <p className="text-slate-300">

            {weather.temperature}°C

          </p>

        </div>

        <div className="flex-1 h-1 bg-orange-400 rounded-full"/>

        <div className="text-center">

          <FaSun className="text-red-400 text-5xl mx-auto"/>

          <h3 className="text-white mt-3 font-bold">

            Sunset

          </h3>

          <p className="text-slate-300">

            {weather.sunset}

          </p>

        </div>

        <div className="flex-1 h-1 bg-indigo-500 rounded-full"/>

        <div className="text-center">

          <FaMoon className="text-blue-300 text-5xl mx-auto"/>

          <h3 className="text-white mt-3 font-bold">

            Night

          </h3>

          <p className="text-slate-300">

            {weather.feels_like}°C

          </p>

        </div>

      </div>

    </div>

  );

}

export default WeatherTimeline;