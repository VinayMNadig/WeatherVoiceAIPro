function WeatherParticles({ weather }) {

  if (!weather) return null;

  const condition = weather.weather.toLowerCase();

  // Rain
  if (condition.includes("rain")) {

    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {[...Array(120)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-8 bg-cyan-300 opacity-60 animate-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${0.8 + Math.random()}s`,
            }}
          />
        ))}
      </div>
    );
  }

  // Snow
  if (condition.includes("snow")) {

    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white text-xl animate-snow"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 4}s`,
            }}
          >
            ❄
          </div>
        ))}
      </div>
    );
  }

  // Clouds
  if (condition.includes("cloud")) {

    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/30 text-8xl animate-cloud"
            style={{
              top: `${Math.random() * 70}%`,
              animationDelay: `${i * 3}s`,
            }}
          >
            ☁
          </div>
        ))}
      </div>
    );
  }

  // Clear Sky
  if (condition.includes("clear")) {

    return (
      <div className="fixed inset-0 pointer-events-none -z-10">

        <div className="absolute top-20 right-24 w-40 h-40 rounded-full bg-yellow-300 blur-3xl opacity-40 animate-pulse"></div>

      </div>
    );
  }

  return null;
}

export default WeatherParticles;