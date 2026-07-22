function WeatherTip({ weather }) {

  if (!weather) return null;

  let tip = "Have a wonderful day.";

  if (weather.temperature > 35)
    tip = "🥤 Stay hydrated and avoid direct sunlight.";

  else if (weather.weather.toLowerCase().includes("rain"))
    tip = "☔ Carry an umbrella before going outside.";

  else if (weather.wind_speed > 8)
    tip = "💨 Strong winds expected. Drive carefully.";

  else if (weather.weather.toLowerCase().includes("clear"))
    tip = "😎 Perfect weather for outdoor activities.";

  return (

    <div className="bg-gradient-to-r from-cyan-500 to-blue-700 rounded-3xl p-8 text-white shadow-2xl">

      <h2 className="text-3xl font-bold">

        Today's Smart Tip

      </h2>

      <p className="mt-4 text-xl">

        {tip}

      </p>

    </div>

  );

}

export default WeatherTip;