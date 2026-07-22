import html2canvas from "html2canvas";
import {
  FaDownload,
  FaShareAlt,
  FaPrint,
} from "react-icons/fa";
import {
  FaTemperatureHigh,
  FaTint,
  FaWind,
  FaCompressArrowsAlt,
  FaEye,
  FaArrowUp,
  FaArrowDown,
  FaSun,
  FaMoon,
} from "react-icons/fa";

function WeatherCard({ weather }) {

  if (!weather) {
    return (
      <div className="max-w-6xl mx-auto mt-10">

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 text-center text-white shadow-2xl border border-white/20">

          <h2 className="text-6xl">🌤</h2>

          <h1 className="text-4xl font-bold mt-4">
            WeatherVoice AI Pro
          </h1>

          <p className="text-xl mt-4 text-gray-300">
            Search for any city to view live weather information.
          </p>

        </div>

      </div>
    );
  }

  const sunrise = new Date(weather.sunrise * 1000).toLocaleTimeString();

  const sunset = new Date(weather.sunset * 1000).toLocaleTimeString();

  const favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  const isFavorite = favorites.includes(weather.city);

  function toggleFavorite() {

    let fav =
      JSON.parse(localStorage.getItem("favorites")) || [];

    if (fav.includes(weather.city)) {

      fav = fav.filter(city => city !== weather.city);

      localStorage.setItem(
        "favorites",
        JSON.stringify(fav)
      );

      alert("💔 Removed from Favorites");

    } else {

      fav.push(weather.city);

      localStorage.setItem(
        "favorites",
        JSON.stringify(fav)
      );

      alert("❤️ Added to Favorites");

    }

  }
async function downloadCard() {
  try {
    const card = document.getElementById("weather-card");

    if (!card) {
      alert("Weather card not found.");
      return;
    }

    const canvas = await html2canvas(card, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
    });

    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = `${weather.city}-weather.png`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  } catch (err) {
    console.error(err);
    alert("Download failed.");
  }
}
async function shareWeather() {

  const text = `🌤 Weather in ${weather.city}

🌡 Temperature : ${weather.temperature}°C

☁ Weather : ${weather.description}

💧 Humidity : ${weather.humidity}%

🌬 Wind : ${weather.wind_speed} m/s

Generated using WeatherVoice AI Pro`;

  if (navigator.share) {

    await navigator.share({
  title: "Weather Report",
  text,
});

  } else {

    navigator.clipboard.writeText(text);

    alert("Weather copied to clipboard.");

  }

}

function printWeather() {

  window.print();

}

  return (

    <div className="max-w-7xl mx-auto mt-10">

      <div
  id="weather-card"
  className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 text-white"
>

        <div className="flex justify-between items-center flex-wrap gap-8">

          <div>

            <h1 className="text-5xl font-bold">
              {weather.city}
            </h1>

            <h2 className="text-2xl text-gray-300 mt-2">
              {weather.country}
            </h2>

            <p className="text-xl mt-3 capitalize">
              {weather.description}
            </p>

          </div>

          <div className="text-center">

            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
              alt="Weather Icon"
              className="mx-auto"
            />

            <h1 className="text-7xl font-bold">
              {Math.round(weather.temperature)}°
            </h1>

            <button
              onClick={toggleFavorite}
              className={`mt-4 px-6 py-3 rounded-xl font-bold transition ${
                isFavorite
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-pink-600 hover:bg-pink-700"
              }`}
            >
              {isFavorite
                ? "💔 Remove Favorite"
                : "❤️ Add Favorite"}
            </button>
            <div className="flex justify-center gap-3 mt-5 flex-wrap">

  <button
    onClick={downloadCard}
    className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl"
  >
    <FaDownload />
  </button>

  <button
    onClick={shareWeather}
    className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl"
  >
    <FaShareAlt />
  </button>

  <button
    onClick={printWeather}
    className="bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-xl"
  >
    <FaPrint />
  </button>

</div>

          </div>

        </div>

        <div className="grid md:grid-cols-4 gap-5 mt-10">

          <div className="bg-white/10 rounded-2xl p-5">

            <FaTemperatureHigh className="text-3xl text-orange-400" />

            <h3 className="mt-3 text-gray-300">
              Feels Like
            </h3>

            <p className="text-3xl font-bold">
              {weather.feels_like}°C
            </p>

          </div>

          <div className="bg-white/10 rounded-2xl p-5">

            <FaTint className="text-3xl text-blue-400" />

            <h3 className="mt-3 text-gray-300">
              Humidity
            </h3>

            <p className="text-3xl font-bold">
              {weather.humidity}%
            </p>

          </div>

          <div className="bg-white/10 rounded-2xl p-5">

            <FaWind className="text-3xl text-green-400" />

            <h3 className="mt-3 text-gray-300">
              Wind Speed
            </h3>

            <p className="text-3xl font-bold">
              {weather.wind_speed} m/s
            </p>

          </div>

          <div className="bg-white/10 rounded-2xl p-5">

            <FaCompressArrowsAlt className="text-3xl text-purple-400" />

            <h3 className="mt-3 text-gray-300">
              Pressure
            </h3>

            <p className="text-3xl font-bold">
              {weather.pressure} hPa
            </p>

          </div>

        </div>
                <div className="grid md:grid-cols-4 gap-5 mt-5">

          <div className="bg-white/10 rounded-2xl p-5">

            <FaEye className="text-3xl text-cyan-400" />

            <h3 className="mt-3 text-gray-300">
              Visibility
            </h3>

            <p className="text-3xl font-bold">
              {weather.visibility} km
            </p>

          </div>

          <div className="bg-white/10 rounded-2xl p-5">

            <FaArrowDown className="text-3xl text-blue-400" />

            <h3 className="mt-3 text-gray-300">
              Minimum
            </h3>

            <p className="text-3xl font-bold">
              {weather.minimum_temperature}°C
            </p>

          </div>

          <div className="bg-white/10 rounded-2xl p-5">

            <FaArrowUp className="text-3xl text-red-400" />

            <h3 className="mt-3 text-gray-300">
              Maximum
            </h3>

            <p className="text-3xl font-bold">
              {weather.maximum_temperature}°C
            </p>

          </div>

          <div className="bg-white/10 rounded-2xl p-5">

            <FaWind className="text-3xl text-yellow-400" />

            <h3 className="mt-3 text-gray-300">
              Wind Direction
            </h3>

            <p className="text-3xl font-bold">
              {weather.wind_degree}°
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-5">

          <div className="bg-orange-500 rounded-2xl p-6 text-black">

            <FaSun className="text-4xl mb-3" />

            <h2 className="text-2xl font-bold">
              Sunrise
            </h2>

            <p className="text-xl mt-2">
              {sunrise}
            </p>

          </div>

          <div className="bg-indigo-700 rounded-2xl p-6">

            <FaMoon className="text-4xl mb-3" />

            <h2 className="text-2xl font-bold">
              Sunset
            </h2>

            <p className="text-xl mt-2">
              {sunset}
            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default WeatherCard;