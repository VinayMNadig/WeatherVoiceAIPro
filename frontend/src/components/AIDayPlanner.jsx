import {
  FaSun,
  FaCloudSun,
  FaMoon,
  FaTint,
} from "react-icons/fa";

function AIDayPlanner({ weather }) {

  if (!weather) return null;

  const temp = weather.temperature;
  const condition = weather.weather;
  const humidity = weather.humidity;

  const morning =
    condition === "Rain"
      ? "Indoor exercise is recommended."
      : "Perfect for walking, jogging and cycling.";

  const afternoon =
    temp > 33
      ? "High temperature. Drink water and avoid direct sunlight."
      : "Good weather for work and travel.";

  const evening =
    condition === "Rain"
      ? "Carry an umbrella if going outside."
      : "Excellent weather for shopping and outdoor activities.";

  const night =
    humidity > 85
      ? "Humidity is high. Stay comfortable indoors."
      : "Great weather for dinner and evening walks.";
        return (

    <div className="space-y-8">

      {/* Header */}

      <div className="rounded-3xl bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-white">

          📅 AI Day Planner

        </h1>

        <p className="text-orange-100 text-xl mt-3">

          Personalized schedule based on today's weather in{" "}
          <b>{weather.city}</b>

        </p>

      </div>

      {/* Timeline */}

      <div className="space-y-6">

        {/* Morning */}

        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-7 shadow-xl">

          <div className="flex items-center gap-5">

            <FaSun className="text-6xl text-white"/>

            <div>

              <h2 className="text-3xl font-bold text-white">

                Morning

              </h2>

              <p className="text-white/90 text-lg">

                6:00 AM - 10:00 AM

              </p>

            </div>

          </div>

          <p className="text-white text-xl mt-5 leading-9">

            {morning}

          </p>

        </div>

        {/* Afternoon */}

        <div className="bg-gradient-to-r from-cyan-500 to-blue-700 rounded-3xl p-7 shadow-xl">

          <div className="flex items-center gap-5">

            <FaCloudSun className="text-6xl text-white"/>

            <div>

              <h2 className="text-3xl font-bold text-white">

                Afternoon

              </h2>

              <p className="text-white/90 text-lg">

                10:00 AM - 4:00 PM

              </p>

            </div>

          </div>

          <p className="text-white text-xl mt-5 leading-9">

            {afternoon}

          </p>

        </div>

        {/* Evening */}

        <div className="bg-gradient-to-r from-purple-500 to-indigo-700 rounded-3xl p-7 shadow-xl">

          <div className="flex items-center gap-5">

            <FaTint className="text-6xl text-white"/>

            <div>

              <h2 className="text-3xl font-bold text-white">

                Evening

              </h2>

              <p className="text-white/90 text-lg">

                4:00 PM - 7:00 PM

              </p>

            </div>

          </div>

          <p className="text-white text-xl mt-5 leading-9">

            {evening}

          </p>

        </div>

        {/* Night */}

        <div className="bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl p-7 shadow-xl">

          <div className="flex items-center gap-5">

            <FaMoon className="text-6xl text-yellow-300"/>

            <div>

              <h2 className="text-3xl font-bold text-white">

                Night

              </h2>

              <p className="text-slate-300 text-lg">

                7:00 PM onwards

              </p>

            </div>

          </div>

          <p className="text-white text-xl mt-5 leading-9">

            {night}

          </p>

        </div>

      </div>

    </div>

  );

}

export default AIDayPlanner;