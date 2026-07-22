function ForecastAnalytics({ forecast }) {

  if (!forecast || !forecast.list) return null;

  const items = forecast.list.slice(0, 8);

  const avgTemp =
    (
      items.reduce((sum, item) => sum + item.main.temp, 0) /
      items.length
    ).toFixed(1);

  const avgHumidity =
    (
      items.reduce((sum, item) => sum + item.main.humidity, 0) /
      items.length
    ).toFixed(0);

  const avgWind =
    (
      items.reduce((sum, item) => sum + item.wind.speed, 0) /
      items.length
    ).toFixed(1);

  const rain =
    (
      items.reduce((sum, item) => sum + (item.pop || 0), 0) /
      items.length *
      100
    ).toFixed(0);

  const cards = [
    {
      title: "Avg Temp",
      value: `${avgTemp}°C`,
    },
    {
      title: "Humidity",
      value: `${avgHumidity}%`,
    },
    {
      title: "Wind",
      value: `${avgWind} m/s`,
    },
    {
      title: "Rain Chance",
      value: `${rain}%`,
    },
  ];

  return (

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card) => (

        <div
          key={card.title}
          className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 text-center"
        >

          <h3 className="text-slate-300 text-lg">
            {card.title}
          </h3>

          <h1 className="text-4xl font-bold text-white mt-4">
            {card.value}
          </h1>

        </div>

      ))}

    </div>

  );

}

export default ForecastAnalytics;