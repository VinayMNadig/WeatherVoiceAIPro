import {
  FaSun,
  FaMoon,
  FaEye,
  FaCompass,
  FaTemperatureHigh,
  FaTint,
} from "react-icons/fa";

function TodayHighlights({ weather }) {

  if (!weather) return null;

  function formatTime(unix) {
    return new Date(unix * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  const cards = [
    {
      title: "Sunrise",
      value: formatTime(weather.sunrise),
      icon: <FaSun className="text-yellow-400 text-5xl" />,
    },
    {
      title: "Sunset",
      value: formatTime(weather.sunset),
      icon: <FaMoon className="text-indigo-300 text-5xl" />,
    },
    {
      title: "Visibility",
      value: `${weather.visibility} km`,
      icon: <FaEye className="text-cyan-400 text-5xl" />,
    },
    {
      title: "Wind Direction",
      value: `${weather.wind_degree}°`,
      icon: <FaCompass className="text-purple-400 text-5xl" />,
    },
    {
      title: "Pressure",
      value: `${weather.pressure} hPa`,
      icon: <FaTemperatureHigh className="text-red-400 text-5xl" />,
    },
    {
      title: "Humidity",
      value: `${weather.humidity}%`,
      icon: <FaTint className="text-blue-400 text-5xl" />,
    },
  ];

  return (
    <div>

      <h2 className="text-4xl font-bold text-white mb-8">
        Today's Highlights
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {cards.map((card, index) => (

          <div
            key={index}
            className="
            bg-white/10
            backdrop-blur-2xl
            border
            border-white/20
            rounded-3xl
            p-8
            transition-all
            duration-300
            hover:scale-105
            hover:-translate-y-2
            hover:shadow-cyan-500/30
            hover:shadow-2xl
            "
          >

            {card.icon}

            <p className="text-slate-300 text-xl mt-6">
              {card.title}
            </p>

            <h1 className="text-white text-4xl font-bold mt-3">
              {card.value}
            </h1>

          </div>

        ))}

      </div>

    </div>
  );

}

export default TodayHighlights;