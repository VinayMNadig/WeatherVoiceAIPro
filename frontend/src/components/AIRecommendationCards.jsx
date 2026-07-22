import {
  FaWalking,
  FaUmbrella,
  FaTshirt,
  FaCar,
  FaBicycle,
  FaTint,
  FaCamera,
  FaHeartbeat,
} from "react-icons/fa";

function WeatherRecommendations({ weather }) {
  if (!weather) return null;

  const temp = weather.temperature;
  const humidity = weather.humidity;
  const wind = weather.wind_speed;
  const condition = weather.weather;

  const cards = [
    {
      title: "Outdoor",
      icon: <FaWalking />,
      value:
        condition === "Rain"
          ? "Avoid"
          : temp < 35
          ? "Good"
          : "Too Hot",
      color: "from-green-500 to-emerald-700",
    },
    {
      title: "Umbrella",
      icon: <FaUmbrella />,
      value:
        condition === "Rain" || condition === "Drizzle"
          ? "Carry One"
          : "Not Needed",
      color: "from-sky-500 to-blue-700",
    },
    {
      title: "Clothes",
      icon: <FaTshirt />,
      value:
        temp > 32
          ? "Light Cotton"
          : temp < 18
          ? "Jacket"
          : "Casual",
      color: "from-pink-500 to-rose-700",
    },
    {
      title: "Driving",
      icon: <FaCar />,
      value:
        wind > 15
          ? "Careful"
          : condition === "Fog"
          ? "Low Visibility"
          : "Safe",
      color: "from-orange-500 to-red-700",
    },
    {
      title: "Cycling",
      icon: <FaBicycle />,
      value:
        wind < 8 && condition !== "Rain"
          ? "Excellent"
          : "Avoid",
      color: "from-cyan-500 to-blue-700",
    },
    {
      title: "Water",
      icon: <FaTint />,
      value:
        temp > 30
          ? "Drink More"
          : "Normal",
      color: "from-blue-400 to-cyan-700",
    },
    {
      title: "Photography",
      icon: <FaCamera />,
      value:
        condition === "Clear"
          ? "Excellent"
          : condition === "Clouds"
          ? "Good"
          : "Average",
      color: "from-violet-500 to-purple-700",
    },
    {
      title: "Health",
      icon: <FaHeartbeat />,
      value:
        humidity > 80
          ? "High Humidity"
          : "Comfortable",
      color: "from-red-500 to-pink-700",
    },
  ];

  return (
    <div className="space-y-6">

      {/* AI Summary */}

      <div className="rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-7 shadow-2xl">

        <h2 className="text-3xl font-bold text-white mb-4">
          🤖 AI Recommendations
        </h2>

        <p className="text-white text-xl leading-9">
          Today in <b>{weather.city}</b>, the temperature is{" "}
          <b>{temp}°C</b> with{" "}
          <b>{weather.description}</b>. Humidity is{" "}
          <b>{humidity}%</b> and wind speed is{" "}
          <b>{wind} m/s</b>. Overall, today is{" "}
          <b>
            {condition === "Rain"
              ? "better for indoor activities."
              : "good for outdoor plans."}
          </b>
        </p>

      </div>

      {/* Recommendation Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {cards.map((card) => (

          <div
            key={card.title}
            className={`bg-gradient-to-br ${card.color}
            rounded-3xl p-6
            shadow-xl
            hover:scale-105
            transition-all
            duration-300
            cursor-pointer`}
          >

            <div className="text-5xl text-white mb-5">
              {card.icon}
            </div>

            <h3 className="text-3xl font-bold text-white">
              {card.title}
            </h3>

            <p className="text-white/90 mt-3 text-2xl font-semibold">
              {card.value}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default WeatherRecommendations;