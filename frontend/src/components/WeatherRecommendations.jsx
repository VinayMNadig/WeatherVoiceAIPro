import {
  FaUmbrella,
  FaSun,
  FaMaskFace,
  FaBottleWater,
  FaWind,
} from "react-icons/fa6";

function WeatherRecommendations({ weather }) {

  if (!weather) return null;

  const tips = [];

  if (weather.weather === "Rain") {
    tips.push({
      icon: <FaUmbrella />,
      text: "Carry an umbrella today.",
    });
  }

  if (weather.temperature >= 35) {
    tips.push({
      icon: <FaBottleWater />,
      text: "Stay hydrated and avoid direct sunlight.",
    });
  }

  if (weather.humidity >= 80) {
    tips.push({
      icon: <FaWind />,
      text: "High humidity may feel uncomfortable.",
    });
  }

  if (weather.visibility <= 3) {
    tips.push({
      icon: <FaMaskFace />,
      text: "Low visibility. Drive carefully.",
    });
  }

  if (weather.weather === "Clear") {
    tips.push({
      icon: <FaSun />,
      text: "Perfect weather for outdoor activities.",
    });
  }

  if (tips.length === 0) {
    tips.push({
      icon: <FaSun />,
      text: "Weather conditions look good today.",
    });
  }

  return (

    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8">

      <h2 className="text-3xl font-bold text-white mb-6">

        Smart Recommendations

      </h2>

      <div className="space-y-4">

        {tips.map((tip, index) => (

          <div
            key={index}
            className="flex items-center gap-4 bg-white/10 rounded-2xl p-4"
          >

            <div className="text-3xl text-cyan-400">
              {tip.icon}
            </div>

            <p className="text-white text-lg">
              {tip.text}
            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default WeatherRecommendations;