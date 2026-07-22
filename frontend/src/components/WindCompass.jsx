import { FaLocationArrow } from "react-icons/fa";

function WindCompass({ weather }) {

  if (!weather) return null;

  return (

    <div className="max-w-sm mx-auto mt-8">

      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl text-center">

        <h2 className="text-2xl text-white font-bold mb-6">

          🧭 Wind Compass

        </h2>

        <div className="relative w-48 h-48 mx-auto rounded-full border-4 border-white flex items-center justify-center">

          <div
            className="transition-all duration-700"
            style={{
              transform: `rotate(${weather.wind_degree}deg)`
            }}
          >

            <FaLocationArrow
              className="text-red-500 text-6xl"
            />

          </div>

        </div>

        <h2 className="text-white text-3xl mt-6 font-bold">

          {weather.wind_degree}°

        </h2>

        <p className="text-gray-300">

          Wind Speed : {weather.wind_speed} m/s

        </p>

      </div>

    </div>

  );

}

export default WindCompass;