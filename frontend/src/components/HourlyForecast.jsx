import { useEffect, useState } from "react";

function HourlyForecast({ city }) {

  const [hours, setHours] = useState([]);

  useEffect(() => {

    if (!city) return;

    async function load() {

      const res = await fetch(
        `http://127.0.0.1:5000/forecast?city=${city}`
      );

      const data = await res.json();

      if (data.list) {

        setHours(data.list.slice(0, 12));

      }

    }

    load();

  }, [city]);

  if (!hours.length) return null;

  return (

    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8">

      <h2 className="text-3xl font-bold text-white mb-6">

        Hourly Forecast

      </h2>

      <div className="flex gap-5 overflow-x-auto pb-3 scrollbar-hide">

        {hours.map((hour, index) => (

          <div
            key={index}
            className="min-w-[130px] bg-white/10 rounded-3xl p-5 text-center border border-white/10 hover:bg-white/20 transition"
          >

            <p className="text-slate-300 text-lg">

              {new Date(hour.dt * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}

            </p>

            <img
              src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
              className="w-16 h-16 mx-auto"
            />

            <h3 className="text-white text-3xl font-bold">

              {Math.round(hour.main.temp)}°

            </h3>

            <p className="text-cyan-300 capitalize text-sm">

              {hour.weather[0].main}

            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default HourlyForecast;