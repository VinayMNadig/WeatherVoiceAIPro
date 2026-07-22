import HeroWeatherCard from "./HeroWeatherCard";
import GaugeDashboard from "./GaugeDashboard";
import SunProgress from "./SunProgress";
import WeatherTip from "./WeatherTip";
import WeatherStatsGrid from "./WeatherStatsGrid";
import TodayHighlights from "./TodayHighlights";

import HourlyForecast from "../HourlyForecast";
import Forecast from "../Forecast";

import WeatherChart from "../WeatherChart";
import AQICard from "../AQICard";
import UVCard from "../UVCard";
import WeatherMap from "../WeatherMap";

import FavoriteCities from "../FavoriteCities";
import RecentSearches from "../RecentSearches";

import WeatherAlert from "../WeatherAlert";
import AIAssistant from "../AIAssistant";

function PremiumDashboard({
  weather,
  setWeather,
  notifications,
  setNotifications,
}) {
  if (!weather) return null;

  return (
    <div className="space-y-8">

      {/* Hero */}
      <HeroWeatherCard weather={weather} />

      {/* Weather Alert */}
      <WeatherAlert weather={weather} />

      {/* Circular Dashboard */}
      <GaugeDashboard weather={weather} />

      {/* Sunrise / Sunset */}
      <SunProgress weather={weather} />

      {/* Smart Tip */}
      <WeatherTip weather={weather} />

      {/* Weather Statistics */}
      <WeatherStatsGrid weather={weather} />

      {/* Today's Highlights */}
      <TodayHighlights weather={weather} />

      {/* AI Assistant */}
      <AIAssistant
        weather={weather}
        notifications={notifications}
        setNotifications={setNotifications}
      />

      {/* Forecast */}
      <div className="grid xl:grid-cols-2 gap-8">
        <HourlyForecast city={weather.city} />
        <Forecast city={weather.city} />
      </div>

      {/* Analytics */}
      <WeatherChart weather={weather} />

      {/* AQI + UV */}
      <div className="grid xl:grid-cols-2 gap-8">
        <AQICard weather={weather} />
        <UVCard weather={weather} />
      </div>

      {/* Weather Map */}
      <WeatherMap weather={weather} />

      {/* Favorite Cities */}
      <FavoriteCities
        weather={weather}
        setWeather={setWeather}
      />

      {/* Recent Searches */}
      <RecentSearches
        setWeather={setWeather}
      />

    </div>
  );
}

export default PremiumDashboard;