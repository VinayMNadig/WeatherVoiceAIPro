import {
  FaTemperatureHigh,
  FaTint,
  FaWind,
  FaCompressAlt,
  FaEye,
  FaCompass,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";

function Card({ icon, title, value, color }) {

  return (

    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-7 hover:scale-105 transition duration-300 shadow-xl">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-slate-300 text-lg">

            {title}

          </p>

          <h2 className="text-4xl font-bold text-white mt-3">

            {value}

          </h2>

        </div>

        <div className={`text-5xl ${color}`}>

          {icon}

        </div>

      </div>

    </div>

  );

}

function WeatherStatsGrid({ weather }) {

  if (!weather) return null;

  return (

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      <Card
        title="Feels Like"
        value={`${weather.feels_like}°C`}
        icon={<FaTemperatureHigh />}
        color="text-red-400"
      />

      <Card
        title="Humidity"
        value={`${weather.humidity}%`}
        icon={<FaTint />}
        color="text-blue-400"
      />

      <Card
        title="Wind Speed"
        value={`${weather.wind_speed} m/s`}
        icon={<FaWind />}
        color="text-cyan-400"
      />

      <Card
        title="Pressure"
        value={`${weather.pressure} hPa`}
        icon={<FaCompressAlt />}
        color="text-yellow-400"
      />

      <Card
        title="Visibility"
        value={`${weather.visibility} km`}
        icon={<FaEye />}
        color="text-green-400"
      />

      <Card
        title="Wind Direction"
        value={`${weather.wind_degree}°`}
        icon={<FaCompass />}
        color="text-purple-400"
      />

      <Card
        title="Minimum"
        value={`${weather.minimum_temperature}°C`}
        icon={<FaArrowDown />}
        color="text-blue-300"
      />

      <Card
        title="Maximum"
        value={`${weather.maximum_temperature}°C`}
        icon={<FaArrowUp />}
        color="text-orange-400"
      />

    </div>

  );

}

export default WeatherStatsGrid;