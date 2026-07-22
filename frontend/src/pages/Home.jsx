import { useState } from "react";

import Navbar from "../components/common/Navbar";
import SearchBar from "../components/SearchBar";
import PremiumDashboard from "../components/dashboard/PremiumDashboard";
import WeatherBackground from "../components/WeatherBackground";
import WeatherParticles from "../components/WeatherParticles";
import BottomNavigation from "../components/common/BottomNavigation";

function Home() {

  const [weather, setWeather] = useState(null);

  // NEW
  const [notifications, setNotifications] = useState([]);

  return (

    <div className="relative min-h-screen overflow-x-hidden">

      <WeatherBackground weather={weather} />

      <WeatherParticles weather={weather} />

      {/* Pass notifications */}
      <Navbar notifications={notifications} />

      <div className="max-w-7xl mx-auto px-6">

        <div className="pt-10">

          <SearchBar setWeather={setWeather} />

        </div>

        <div className="mt-10 pb-24">

          <PremiumDashboard

            weather={weather}
            setWeather={setWeather}

            notifications={notifications}
            setNotifications={setNotifications}

          />

        </div>

      </div>

      <BottomNavigation />

    </div>

  );

}

export default Home;