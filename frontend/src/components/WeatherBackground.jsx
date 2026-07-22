function WeatherBackground({ weather }) {

  let bg =
    "linear-gradient(135deg,#0f172a,#1e3a8a,#0f172a)";

  if (weather) {

    const condition = weather.weather.toLowerCase();

    if (condition.includes("clear")) {

      bg =
        "linear-gradient(135deg,#0ea5e9,#38bdf8,#7dd3fc)";

    } else if (condition.includes("cloud")) {

      bg =
        "linear-gradient(135deg,#475569,#64748b,#94a3b8)";

    } else if (condition.includes("rain")) {

      bg =
        "linear-gradient(135deg,#0f172a,#1e293b,#334155)";

    } else if (condition.includes("thunder")) {

      bg =
        "linear-gradient(135deg,#111827,#312e81,#1e1b4b)";

    } else if (condition.includes("snow")) {

      bg =
        "linear-gradient(135deg,#dbeafe,#bfdbfe,#93c5fd)";

    }

  }

  return (

    <div
      className="fixed inset-0 -z-10 transition-all duration-1000"
      style={{
        background: bg,
      }}
    >

      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute w-96 h-96 bg-cyan-400/20 rounded-full blur-[140px] top-10 left-10 animate-pulse"></div>

     <div className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-[120px] bottom-10 right-10 animate-pulse"></div>

     <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

    </div>

  );

}

export default WeatherBackground;