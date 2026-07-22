import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

function WeatherMap({ weather }) {
  const [layer, setLayer] = useState("temp_new");

  if (!weather) return null;

  // Supports both lat/lon and latitude/longitude
  const lat = weather.lat ?? weather.latitude;
  const lon = weather.lon ?? weather.longitude;

  console.log("Weather Object:", weather);
  console.log("Latitude:", lat);
  console.log("Longitude:", lon);

  if (lat === undefined || lon === undefined) {
    return (
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-white mb-6">
          Live Weather Map
        </h2>

        <p className="text-red-400 text-lg">
          Location coordinates not available.
        </p>

        <pre className="text-white mt-4 overflow-auto">
          {JSON.stringify(weather, null, 2)}
        </pre>
      </div>
    );
  }

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  return (
    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">
          Live Weather Map
        </h2>

        <select
          value={layer}
          onChange={(e) => setLayer(e.target.value)}
          className="bg-slate-800 text-white rounded-xl p-3"
        >
          <option value="temp_new">Temperature</option>
          <option value="precipitation_new">Rain</option>
          <option value="clouds_new">Clouds</option>
          <option value="wind_new">Wind</option>
        </select>
      </div>

      <MapContainer
        center={[lat, lon]}
        zoom={8}
        scrollWheelZoom={true}
        style={{
          height: "500px",
          width: "100%",
          borderRadius: "20px",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {API_KEY && (
          <TileLayer
            url={`https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${API_KEY}`}
            opacity={0.6}
          />
        )}

        <Marker position={[lat, lon]}>
          <Popup>
            <strong>{weather.city}</strong>
            <br />
            {weather.temperature}°C
            <br />
            {weather.description}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default WeatherMap;