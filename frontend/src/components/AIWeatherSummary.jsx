import { FaRobot } from "react-icons/fa";

function AIWeatherSummary({ weather }) {

  if (!weather) return null;

  let summary = "";

  if (weather.weather === "Clear") {

    summary = `The weather in ${weather.city} is clear with a temperature of ${weather.temperature}°C. It is an excellent day for outdoor activities.`;

  } else if (weather.weather === "Clouds") {

    summary = `${weather.city} is experiencing cloudy weather. The current temperature is ${weather.temperature}°C.`;

  } else if (weather.weather === "Rain") {

    summary = `It is raining in ${weather.city}. Carry an umbrella and be careful while travelling.`;

  } else if (weather.weather === "Thunderstorm") {

    summary = `Thunderstorms are expected in ${weather.city}. Stay indoors and avoid open areas.`;

  } else if (weather.weather === "Snow") {

    summary = `${weather.city} is experiencing snowfall. Wear warm clothes and travel carefully.`;

  } else if (weather.weather === "Mist" || weather.weather === "Fog") {

    summary = `${weather.city} has low visibility because of ${weather.weather.toLowerCase()}. Drive carefully.`;

  } else {

    summary = `${weather.city} is experiencing ${weather.description}. The temperature is ${weather.temperature}°C.`;

  }

  if (weather.temperature >= 35) {

    summary += " It is quite hot today, so stay hydrated.";

  }

  if (weather.temperature <= 10) {

    summary += " It is cold outside, wear warm clothing.";

  }

  if (weather.humidity >= 80) {

    summary += " Humidity is high, so it may feel warmer than the actual temperature.";

  }

  if (weather.wind_speed >= 10) {

    summary += " Strong winds are expected today.";

  }

  return (

    <div className="bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-700 rounded-3xl p-8 shadow-2xl">

      <div className="flex items-center gap-4">

        <FaRobot className="text-5xl text-white" />

        <div>

          <h2 className="text-3xl font-bold text-white">

            AI Weather Summary

          </h2>

          <p className="text-cyan-100">

            Smart weather analysis

          </p>

        </div>

      </div>

      <p className="text-white text-lg leading-9 mt-8">

        {summary}

      </p>

    </div>

  );

}

export default AIWeatherSummary;