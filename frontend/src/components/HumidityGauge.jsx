import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

function HumidityGauge({ weather }) {

  if (!weather) return null;

  return (

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">

      <h2 className="text-white text-2xl font-bold mb-8">

        💧 Humidity

      </h2>

      <CircularProgressbar

        value={weather.humidity}

        text={`${weather.humidity}%`}

        styles={buildStyles({

          pathColor:"#3b82f6",

          textColor:"#fff",

          trailColor:"#1e293b"

        })}

      />

    </div>

  );

}

export default HumidityGauge;