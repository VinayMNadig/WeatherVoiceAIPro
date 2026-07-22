import { FaExclamationTriangle } from "react-icons/fa";

function WeatherAlert({ weather }) {

  if (!weather) return null;

  let alert = null;
  let color = "bg-green-600";

  if (weather.weather === "Thunderstorm") {
    alert = "Thunderstorm Warning ⚡ Stay indoors.";
    color = "bg-red-600";
  } else if (weather.weather === "Rain") {
    alert = "Heavy Rain Expected 🌧 Carry an umbrella.";
    color = "bg-blue-600";
  } else if (weather.temperature >= 38) {
    alert = "Heat Wave Alert 🥵 Stay hydrated.";
    color = "bg-orange-600";
  } else if (weather.temperature <= 10) {
    alert = "Cold Weather Alert ❄ Wear warm clothes.";
    color = "bg-cyan-600";
  } else if (weather.wind_speed >= 10) {
    alert = "Strong Wind Warning 💨 Be careful outdoors.";
    color = "bg-purple-600";
  } else if (weather.visibility <= 2) {
    alert = "Low Visibility 🌫 Drive carefully.";
    color = "bg-yellow-600";
  }

  if (!alert) return null;

  return (
    <div className={`${color} rounded-3xl p-6 shadow-2xl animate-pulse`}>

      <div className="flex items-center gap-4">

        <FaExclamationTriangle className="text-4xl text-white" />

        <div>

          <h2 className="text-2xl font-bold text-white">
            Weather Alert
          </h2>

          <p className="text-white mt-2">
            {alert}
          </p>

        </div>

      </div>

    </div>
  );

}

export default WeatherAlert;