import { useState } from "react";

function WeatherComparison() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  async function searchCity() {

    if (!city.trim()) return;

    try {

      const res = await fetch(
        `http://127.0.0.1:5000/weather?city=${city}`
      );

      const data = await res.json();

      setWeather(data);

      setCity("");

    } catch (err) {

      console.log(err);

    }

  }

  return (

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8">

      <h2 className="text-3xl font-bold text-white mb-6">

        Compare Another City

      </h2>

      <div className="flex gap-4">

        <input
          value={city}
          onChange={(e)=>setCity(e.target.value)}
          placeholder="Enter city"
          className="flex-1 bg-slate-800 text-white rounded-xl px-5 py-4 outline-none"
        />

        <button
          onClick={searchCity}
          className="bg-blue-600 px-8 rounded-xl text-white"
        >
          Compare
        </button>

      </div>

      {weather && (

        <div className="mt-8 grid md:grid-cols-2 gap-6">

          <div className="bg-white/10 rounded-2xl p-6">

            <h3 className="text-2xl font-bold text-white">
              {weather.city}
            </h3>

            <h1 className="text-5xl text-white mt-4">
              {weather.temperature}°C
            </h1>

            <p className="text-slate-300 mt-2">
              {weather.description}
            </p>

            <div className="mt-5 space-y-2 text-white">

              <p>💧 Humidity: {weather.humidity}%</p>

              <p>🌬 Wind: {weather.wind_speed} m/s</p>

              <p>👁 Visibility: {weather.visibility} km</p>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}

export default WeatherComparison;