import { useState } from "react";
import {
  FaSearch,
  FaMicrophone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function SearchBar({ setWeather }) {

  const [city, setCity] = useState("");
  const [listening, setListening] = useState(false);
  const [loading, setLoading] = useState(false);

  async function search(cityName = city) {

    if (!cityName.trim()) return;

    setLoading(true);

    try {

      const res = await fetch(
        `http://127.0.0.1:5000/weather?city=${cityName}`
      );

      const data = await res.json();

      if (data.error || data.cod === "404") {

        alert("City not found");

        setLoading(false);

        return;

      }

      setWeather(data);

      let recent =
        JSON.parse(localStorage.getItem("recentSearches")) || [];

      recent = recent.filter((c) => c !== cityName);

      recent.unshift(cityName);

      recent = recent.slice(0, 5);

      localStorage.setItem(
        "recentSearches",
        JSON.stringify(recent)
      );

      setCity("");

    } catch (err) {

      console.log(err);

      alert("Unable to connect to backend.");

    }

    setLoading(false);

  }

  function voiceSearch() {

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

      alert("Voice Search Not Supported");

      return;

    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";

    recognition.start();

    setListening(true);

    recognition.onresult = (e) => {

      let spoken = e.results[0][0].transcript;

      spoken = spoken.replace(".", "").trim();

      setCity(spoken);

      search(spoken);

      setListening(false);

    };

    recognition.onend = () => setListening(false);

  }

  function currentLocation() {

    setLoading(true);

    navigator.geolocation.getCurrentPosition(

      async (pos) => {

        const { latitude, longitude } = pos.coords;

        const res = await fetch(
          `http://127.0.0.1:5000/weather/location?lat=${latitude}&lon=${longitude}`
        );

        const data = await res.json();
        console.log(data);

        setWeather(data);

        setLoading(false);

      },

      () => {

        alert("Unable to get location");

        setLoading(false);

      }

    );

  }

  return (

    <div className="max-w-7xl mx-auto">

      <div className="bg-white/15 backdrop-blur-2xl border border-white/20 rounded-full shadow-2xl p-3 flex gap-3 items-center">

        <FaSearch className="text-white text-2xl ml-4" />

        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && search()}
          placeholder="Search city..."
          className="flex-1 bg-transparent outline-none text-white text-xl placeholder:text-slate-300"
        />

        <button
          onClick={voiceSearch}
          className={`px-5 py-4 rounded-2xl text-white transition ${
            listening
              ? "bg-red-600 animate-pulse"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          <FaMicrophone />
        </button>

        <button
          onClick={currentLocation}
          className="bg-green-600 hover:bg-green-700 px-5 py-4 rounded-2xl text-white"
        >
          <FaMapMarkerAlt />
        </button>

        <button
          onClick={() => search()}
          disabled={loading}
          className="bg-sky-600 hover:bg-sky-700 px-8 py-4 rounded-2xl text-white font-bold min-w-[130px]"
        >

          {loading ? (

            <div className="flex items-center justify-center gap-2">

              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

              Loading

            </div>

          ) : (

            "Search"

          )}

        </button>

      </div>

    </div>

  );

}

export default SearchBar;