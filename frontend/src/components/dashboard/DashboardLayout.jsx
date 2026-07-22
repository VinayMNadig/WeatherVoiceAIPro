import WelcomeHero from "./WelcomeHero";
import PremiumDashboard from "./PremiumDashboard";

function DashboardLayout({ weather, setWeather }) {

  if (!weather) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8">
        <WelcomeHero />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <PremiumDashboard
        weather={weather}
        setWeather={setWeather}
      />
    </div>
  );
}

export default DashboardLayout;