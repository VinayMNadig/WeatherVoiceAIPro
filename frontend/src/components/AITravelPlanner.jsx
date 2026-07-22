import {
  FaPlane,
  FaWalking,
  FaCar,
  FaBicycle,
  FaMountain,
  FaUmbrellaBeach,
  FaCamera,
  FaTree,
} from "react-icons/fa";

function AITravelPlanner({ weather }) {

  if (!weather) return null;

  const temp = weather.temperature;
  const humidity = weather.humidity;
  const wind = weather.wind_speed;
  const condition = weather.weather;

  function scoreOutdoor() {
    if (condition === "Rain") return 3;
    if (temp > 38) return 4;
    if (temp > 33) return 6;
    return 9.5;
  }

  function scoreCycling() {
    if (condition === "Rain") return 2;
    if (wind > 10) return 5;
    return 9;
  }

  function scoreDriving() {
    if (condition === "Fog") return 5;
    if (condition === "Rain") return 6;
    return 9;
  }

  function scorePhotography() {
    if (condition === "Clear") return 10;
    if (condition === "Clouds") return 8;
    return 6;
  }

  function scoreBeach() {
    if (condition === "Rain") return 2;
    if (temp > 32) return 9;
    return 7;
  }

  function scoreCamping() {
    if (condition === "Rain") return 2;
    if (humidity > 85) return 5;
    return 8;
  }

  const cards = [

    {
      title: "Outdoor",
      score: scoreOutdoor(),
      icon: <FaWalking />,
      color: "from-green-500 to-emerald-700",
    },

    {
      title: "Cycling",
      score: scoreCycling(),
      icon: <FaBicycle />,
      color: "from-cyan-500 to-blue-700",
    },

    {
      title: "Driving",
      score: scoreDriving(),
      icon: <FaCar />,
      color: "from-orange-500 to-red-700",
    },

    {
      title: "Photography",
      score: scorePhotography(),
      icon: <FaCamera />,
      color: "from-violet-500 to-purple-700",
    },

    {
      title: "Beach",
      score: scoreBeach(),
      icon: <FaUmbrellaBeach />,
      color: "from-pink-500 to-rose-700",
    },

    {
      title: "Camping",
      score: scoreCamping(),
      icon: <FaMountain />,
      color: "from-lime-500 to-green-700",
    },

    {
      title: "Nature Walk",
      score: scoreOutdoor(),
      icon: <FaTree />,
      color: "from-teal-500 to-emerald-700",
    },

    {
      title: "Travel",
      score: scoreDriving(),
      icon: <FaPlane />,
      color: "from-sky-500 to-indigo-700",
    },

  ];
    return (

    <div className="space-y-8">

      {/* Header */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-cyan-600 to-blue-700 p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-white">

          🌍 AI Travel Planner

        </h1>

        <p className="text-cyan-100 text-xl mt-3">

          Smart activity scores generated from today's weather in{" "}
          <b>{weather.city}</b>

        </p>

      </div>

      {/* Score Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {cards.map((item) => (

          <div
            key={item.title}
            className={`rounded-3xl bg-gradient-to-br ${item.color}
            p-7 shadow-2xl hover:scale-105 transition-all duration-300`}
          >

            <div className="flex justify-between items-center">

              <div className="text-5xl text-white">

                {item.icon}

              </div>

              <div className="text-4xl font-bold text-white">

                {item.score}/10

              </div>

            </div>

            <h2 className="text-3xl font-bold text-white mt-6">

              {item.title}

            </h2>

            {/* Progress Bar */}

            <div className="mt-6">

              <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">

                <div
                  className="h-full bg-white rounded-full transition-all duration-700"
                  style={{
                    width: `${item.score * 10}%`,
                  }}
                />

              </div>

            </div>

            <p className="text-white/90 mt-4 text-lg">

              {item.score >= 9
                ? "⭐⭐⭐⭐⭐ Excellent"

                : item.score >= 8
                ? "⭐⭐⭐⭐ Very Good"

                : item.score >= 6
                ? "⭐⭐⭐ Good"

                : item.score >= 4
                ? "⭐⭐ Fair"

                : "⭐ Avoid"}

            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default AITravelPlanner;