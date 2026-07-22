import { useEffect, useState } from "react";
import { FaHeart, FaTrash } from "react-icons/fa";

function FavoriteCities({ weather, setWeather }) {

  const [favorites, setFavorites] = useState([]);
  const [cityWeather, setCityWeather] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("favoriteCities")) || [];

    setFavorites(saved);
  }, []);

  useEffect(() => {

    async function loadWeather() {

      const list = [];

      for (const city of favorites) {

        try {

          const res = await fetch(
            `http://127.0.0.1:5000/weather?city=${city}`
          );

          const data = await res.json();

          list.push(data);

        } catch (err) {
          console.log(err);
        }

      }

      setCityWeather(list);

    }

    if (favorites.length) {
      loadWeather();
    } else {
      setCityWeather([]);
    }

  }, [favorites]);

  function addFavorite() {

    if (!weather) return;

    if (favorites.includes(weather.city)) return;

    const updated = [...favorites, weather.city];

    localStorage.setItem(
      "favoriteCities",
      JSON.stringify(updated)
    );

    setFavorites(updated);

  }

  function remove(city) {

    const updated =
      favorites.filter((c) => c !== city);

    localStorage.setItem(
      "favoriteCities",
      JSON.stringify(updated)
    );

    setFavorites(updated);

  }

  return (

    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-3xl font-bold text-white">

          Favorite Cities

        </h2>

        <button
          onClick={addFavorite}
          className="bg-pink-600 px-6 py-3 rounded-xl text-white flex items-center gap-2"
        >
          <FaHeart />
          Add Current
        </button>

      </div>

      {cityWeather.length === 0 ? (

        <p className="text-slate-300">
          No favorite cities yet.
        </p>

      ) : (

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {cityWeather.map((city) => (

            <div
              key={city.city}
              className="bg-white/10 rounded-2xl p-6"
            >

              <div className="flex justify-between items-center">

                <div>

                  <h2 className="text-2xl font-bold text-white">
                    {city.city}
                  </h2>

                  <p className="text-slate-300">
                    {city.country}
                  </p>

                </div>

                <img
                  src={`https://openweathermap.org/img/wn/${city.icon}@2x.png`}
                  alt=""
                />

              </div>

              <h1 className="text-5xl font-bold text-white mt-4">
                {city.temperature}°C
              </h1>

              <p className="text-slate-300 mt-2">
                {city.description}
              </p>

              <div className="grid grid-cols-2 gap-3 mt-5 text-white">

                <div>
                  💧 {city.humidity}%
                </div>

                <div>
                  🌬 {city.wind_speed} m/s
                </div>

              </div>

              <button
                onClick={() => remove(city.city)}
                className="mt-5 bg-red-600 px-5 py-2 rounded-xl text-white flex items-center gap-2"
              >
                <FaTrash />
                Remove
              </button>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}

export default FavoriteCities;