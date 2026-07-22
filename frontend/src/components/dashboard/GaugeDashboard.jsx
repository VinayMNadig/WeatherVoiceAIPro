import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

function Gauge({ title, value, max, unit }) {

  const percent = (value / max) * 100;

  return (

    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6">

      <h3 className="text-white text-xl font-semibold text-center mb-4">
        {title}
      </h3>

      <div className="w-32 h-32 mx-auto">

        <CircularProgressbar
          value={percent}
          text={`${value}${unit}`}
          styles={buildStyles({
            textColor: "#fff",
            pathColor: "#38bdf8",
            trailColor: "rgba(255,255,255,.15)",
          })}
        />

      </div>

    </div>

  );

}

function GaugeDashboard({ weather }) {

  if (!weather) return null;

  return (

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      <Gauge
        title="Humidity"
        value={weather.humidity}
        max={100}
        unit="%"
      />

      <Gauge
        title="Wind"
        value={weather.wind_speed}
        max={20}
        unit=" m/s"
      />

      <Gauge
        title="Pressure"
        value={weather.pressure}
        max={1100}
        unit=" hPa"
      />

      <Gauge
        title="Visibility"
        value={weather.visibility}
        max={10}
        unit=" km"
      />

    </div>

  );

}

export default GaugeDashboard;