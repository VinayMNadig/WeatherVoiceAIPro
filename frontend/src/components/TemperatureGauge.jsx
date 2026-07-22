import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer
} from "recharts";

function TemperatureGauge({ weather }) {

  if (!weather) return null;

  const value = Math.min(
    Math.max(weather.temperature, 0),
    50
  );

  const data = [
    {
      name: "Temp",
      value,
      fill: "#38bdf8",
    },
  ];

  return (

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">

      <h2 className="text-white text-2xl font-bold mb-4">

        🌡 Temperature

      </h2>

      <ResponsiveContainer width="100%" height={260}>

        <RadialBarChart
          innerRadius="70%"
          outerRadius="100%"
          data={data}
          startAngle={180}
          endAngle={0}
        >

          <RadialBar
            dataKey="value"
            cornerRadius={20}
          />

        </RadialBarChart>

      </ResponsiveContainer>

      <h1 className="text-center text-white text-5xl font-bold">

        {weather.temperature}°C

      </h1>

    </div>

  );

}

export default TemperatureGauge;