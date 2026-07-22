import { useEffect, useState } from "react";
import ForecastAnalytics from "./ForecastAnalytics";

function Forecast({ city }) {

  const [forecast, setForecast] = useState(null);

  useEffect(() => {

    if (!city) return;

    async function loadForecast() {

      try {

        const res = await fetch(
          `http://127.0.0.1:5000/forecast?city=${city}`
        );

        const data = await res.json();

        setForecast(data);

      } catch (err) {

        console.error(err);

      }

    }

    loadForecast();

  }, [city]);

  if (!forecast || !forecast.list) {

    return (

      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8">

        <h2 className="text-3xl font-bold text-white">

          5 Day Forecast

        </h2>

        <p className="text-slate-300 mt-5">

          Loading forecast...

        </p>

      </div>

    );

  }

  return (

    <div className="space-y-6">

      <ForecastAnalytics forecast={forecast} />

      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8">

        <h2 className="text-3xl font-bold text-white mb-6">

          5 Day Forecast

        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4">

          {forecast.list
            .filter((_, index) => index % 8 === 0)
            .slice(0, 5)
            .map((item) => (

              <div
                key={item.dt}
                className="bg-white/10 rounded-2xl p-5 text-center"
              >

                <h3 className="text-white text-xl font-bold">

                  {new Date(item.dt * 1000).toLocaleDateString(
                    "en-IN",
                    {
                      weekday: "short",
                    }
                  )}

                </h3>

                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt=""
                  className="mx-auto"
                />

                <h2 className="text-3xl font-bold text-white">

                  {Math.round(item.main.temp)}°C

                </h2>

                <p className="text-slate-300">

                  {item.weather[0].description}

                </p>

              </div>

            ))}

        </div>

      </div>

    </div>

  );

}

export default Forecast;