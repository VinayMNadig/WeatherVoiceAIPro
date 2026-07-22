import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

function WeatherChart({ weather }) {

  if (!weather) return null;

  const data = [
    { day: "Mon", temp: 26, humidity: 68 },
    { day: "Tue", temp: 28, humidity: 70 },
    { day: "Wed", temp: 27, humidity: 72 },
    { day: "Thu", temp: 30, humidity: 65 },
    { day: "Fri", temp: 31, humidity: 60 },
    { day: "Sat", temp: 29, humidity: 75 },
    {
      day: "Today",
      temp: weather.temperature,
      humidity: weather.humidity,
    },
  ];

  return (

    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8">

      <h2 className="text-3xl font-bold text-white mb-8">

        Weather Analytics

      </h2>

      <div style={{ width: "100%", height: 400 }}>

        <ResponsiveContainer>

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="5 5" />

            <XAxis dataKey="day" stroke="#ffffff" />

            <YAxis stroke="#ffffff" />

            <Tooltip />

            <Legend />

            <Line
              type="monotone"
              dataKey="temp"
              stroke="#38bdf8"
              strokeWidth={4}
              name="Temperature (°C)"
            />

            <Line
              type="monotone"
              dataKey="humidity"
              stroke="#22c55e"
              strokeWidth={4}
              name="Humidity (%)"
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}

export default WeatherChart;