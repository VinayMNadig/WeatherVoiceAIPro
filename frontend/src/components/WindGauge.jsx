import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

function WindGauge({ weather }) {

  if (!weather) return null;

  return (

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">

      <h2 className="text-white text-2xl font-bold mb-8">

        🌬 Wind Speed

      </h2>

      <CircularProgressbar

        value={weather.wind_speed*10}

        text={`${weather.wind_speed} m/s`}

        styles={buildStyles({

          pathColor:"#22c55e",

          textColor:"#fff",

          trailColor:"#1e293b"

        })}

      />

    </div>

  );

}

export default WindGauge;