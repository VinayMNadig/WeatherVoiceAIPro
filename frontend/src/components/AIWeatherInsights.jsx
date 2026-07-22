import { useEffect, useState } from "react";

import {
  FaBrain,
  FaHeartbeat,
  FaTshirt,
  FaBolt,
  FaSmile,
  FaExclamationTriangle,
} from "react-icons/fa";

function AIWeatherInsights({ weather }) {

  const [insight, setInsight] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (!weather) return;

    loadInsights();

  }, [weather]);

  async function loadInsights() {

    setLoading(true);

    try {

      const response = await fetch(
        "http://127.0.0.1:5000/ai-weather-insights",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            weather,
          }),
        }
      );

      const data = await response.json();

      setInsight(data);

    }

    catch {

      setInsight({

        analysis:
          "Weather conditions look stable throughout the day.",

        prediction:
          "No significant weather changes expected.",

        health: [
          "Drink enough water",
          "Wear light clothes",
          "Take short breaks outdoors",
        ],

        clothes: [
          "Cotton T-shirt",
          "Cap",
          "Sports Shoes",
        ],

        risk: {
          rain: 20,
          heat: 45,
          wind: 15,
        },

        energy: {
          morning: 96,
          afternoon: 70,
          evening: 90,
        },

        mood:
          "Excellent weather for outdoor activities."

      });

    }

    setLoading(false);

  }

  if (!weather) return null;

  if (loading) {

    return (

      <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-8 text-white">

        Loading AI Weather Insights...

      </div>

    );

  }
  return (

<div className="space-y-8">

    {/* Header */}

    <div className="rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-8 shadow-2xl">

        <div className="flex items-center gap-5">

            <FaBrain className="text-6xl text-white"/>

            <div>

                <h1 className="text-4xl font-bold text-white">

                    AI Weather Insights

                </h1>

                <p className="text-cyan-100 text-lg">

                    Smart analysis powered by AI

                </p>

            </div>

        </div>

    </div>

    {/* Analysis + Prediction */}

    <div className="grid lg:grid-cols-2 gap-6">

        <div className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-700 p-7 shadow-xl">

            <h2 className="text-2xl font-bold text-white mb-4">

                🧠 AI Analysis

            </h2>

            <p className="text-white text-lg leading-8">

                {insight.analysis}

            </p>

        </div>

        <div className="rounded-3xl bg-gradient-to-br from-purple-500 to-indigo-700 p-7 shadow-xl">

            <h2 className="text-2xl font-bold text-white mb-4">

                🔮 Prediction

            </h2>

            <p className="text-white text-lg leading-8">

                {insight.prediction}

            </p>

        </div>

    </div>

    {/* Health + Clothes */}

    <div className="grid lg:grid-cols-2 gap-6">

        <div className="rounded-3xl bg-gradient-to-br from-red-500 to-pink-700 p-7">

            <div className="flex items-center gap-3 mb-5">

                <FaHeartbeat className="text-4xl text-white"/>

                <h2 className="text-2xl font-bold text-white">

                    Health Advice

                </h2>

            </div>

            <div className="space-y-3">

                {insight.health.map((item,index)=>(

                    <div
                        key={index}
                        className="bg-white/20 rounded-xl px-4 py-3 text-white"
                    >

                        ✔ {item}

                    </div>

                ))}

            </div>

        </div>

        <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-yellow-600 p-7">

            <div className="flex items-center gap-3 mb-5">

                <FaTshirt className="text-4xl text-white"/>

                <h2 className="text-2xl font-bold text-white">

                    Clothing

                </h2>

            </div>

            <div className="space-y-3">

                {insight.clothes.map((item,index)=>(

                    <div
                        key={index}
                        className="bg-white/20 rounded-xl px-4 py-3 text-white"
                    >

                        👕 {item}

                    </div>

                ))}

            </div>

        </div>

    </div>

    {/* Risk Meter */}

    <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-8">

        <div className="flex items-center gap-3 mb-6">

            <FaExclamationTriangle className="text-4xl text-yellow-400"/>

            <h2 className="text-3xl font-bold text-white">

                Risk Meter

            </h2>

        </div>

        {Object.entries(insight.risk).map(([key,value])=>(

            <div key={key} className="mb-6">

                <div className="flex justify-between text-white mb-2">

                    <span className="capitalize">

                        {key}

                    </span>

                    <span>

                        {value}%

                    </span>

                </div>

                <div className="w-full h-4 rounded-full bg-slate-700">

                    <div

                        className="h-4 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500"

                        style={{width:`${value}%`}}

                    />

                </div>

            </div>

        ))}

    </div>

    {/* Energy + Mood */}

    <div className="grid lg:grid-cols-2 gap-6">

        <div className="rounded-3xl bg-gradient-to-br from-green-500 to-emerald-700 p-7">

            <div className="flex items-center gap-3 mb-5">

                <FaBolt className="text-4xl text-white"/>

                <h2 className="text-2xl font-bold text-white">

                    Energy Index

                </h2>

            </div>

            {Object.entries(insight.energy).map(([key,value])=>(

                <div key={key} className="mb-5">

                    <div className="flex justify-between text-white mb-2">

                        <span className="capitalize">

                            {key}

                        </span>

                        <span>

                            {value}%

                        </span>

                    </div>

                    <div className="w-full h-4 rounded-full bg-white/20">

                        <div

                            className="h-4 rounded-full bg-white"

                            style={{width:`${value}%`}}

                        />

                    </div>

                </div>

            ))}

        </div>

        <div className="rounded-3xl bg-gradient-to-br from-pink-500 to-purple-700 p-7">

            <div className="flex items-center gap-3 mb-5">

                <FaSmile className="text-4xl text-white"/>

                <h2 className="text-2xl font-bold text-white">

                    Mood Forecast

                </h2>

            </div>

            <p className="text-white text-xl leading-9">

                {insight.mood}

            </p>

        </div>

    </div>

</div>

);

}

export default AIWeatherInsights;