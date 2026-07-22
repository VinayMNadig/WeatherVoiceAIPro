import { useEffect, useState } from "react";

import {
  FaRobot,
  FaPaperPlane,
  FaMicrophone,
  FaVolumeUp,
} from "react-icons/fa";

import AIRecommendationCards from "./AIRecommendationCards";
import AITravelPlanner from "./AITravelPlanner";
import AIDayPlanner from "./AIDayPlanner";
function AIAssistant({ weather }) {

  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  const [summary, setSummary] = useState("Loading AI weather summary...");

  // -------------------------
  // Suggested Questions
  // -------------------------

  const suggestions = [

    "Can I go outside today?",

    "Should I carry an umbrella?",

    "What clothes should I wear?",

    "Is today good for cycling?",

    "Can I go for photography?",

    "Is today good for jogging?",

    "Is today safe for driving?",

    "Should I drink more water?"

  ];

  // -------------------------
  // Voice Recognition
  // -------------------------

  function startListening() {

    if (!("webkitSpeechRecognition" in window)) {

      alert("Speech Recognition is not supported.");

      return;

    }

    const recognition = new window.webkitSpeechRecognition();

    recognition.lang = "en-US";

    recognition.start();

    recognition.onresult = (event) => {

      const text = event.results[0][0].transcript;

      setQuestion(text);

      askAI(text);

    };

  }

  // -------------------------
  // Speak AI
  // -------------------------

  function speak(text) {

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";

    speech.rate = 1;

    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

  }

  // -------------------------
  // Ask Suggested Question
  // -------------------------

  function askSuggestion(text) {

    setQuestion(text);

    askAI(text);

  }

  // -------------------------
  // AI Chat
  // -------------------------

  async function askAI(customQuestion = null) {

    const userQuestion = customQuestion || question;

    if (!userQuestion.trim()) return;

    setLoading(true);

    setMessages((prev) => [

      ...prev,

      {

        sender: "user",

        text: userQuestion,

      },

    ]);

    setQuestion("");

    try {

      const response = await fetch(

        "http://127.0.0.1:5000/ai-chat",

        {

          method: "POST",

          headers: {

            "Content-Type": "application/json",

          },

          body: JSON.stringify({

            question: userQuestion,

            weather,

          }),

        }

      );

      const data = await response.json();

      const aiAnswer =

        data.answer || "No response.";

      setMessages((prev) => [

        ...prev,

        {

          sender: "ai",

          text: aiAnswer,

        },

      ]);

      speak(aiAnswer);

    }

    catch (err) {

      setMessages((prev) => [

        ...prev,

        {

          sender: "ai",

          text: "Unable to contact AI server.",

        },

      ]);

    }

    setLoading(false);

  }

  // -------------------------
  // AI Weather Summary
  // -------------------------

  useEffect(() => {

    if (!weather) return;

    async function loadSummary() {

      try {

        const response = await fetch(

          "http://127.0.0.1:5000/ai-chat",

          {

            method: "POST",

            headers: {

              "Content-Type": "application/json",

            },

            body: JSON.stringify({

              weather,

              question:
                "Give a short premium weather summary in 70 words with advice.",

            }),

          }

        );

        const data = await response.json();

        setSummary(data.answer);

      }

      catch {

        setSummary(

          `Today in ${weather.city} it is ${weather.temperature}°C with ${weather.description}.`

        );

      }

    }

    loadSummary();

  }, [weather]);
  
    return (

<div className="space-y-8">

    {/* Header */}

    <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 shadow-2xl">

        <div className="flex items-center gap-5">

            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">

                <FaRobot className="text-5xl text-white"/>

            </div>

            <div>

                <h1 className="text-4xl font-bold text-white">

                    AI Weather Assistant

                </h1>

                <p className="text-cyan-200 text-lg">

                    Powered by Groq AI

                </p>

            </div>

        </div>

    </div>

    {/* Weather Badges */}

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

        <div className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-700 p-6 shadow-xl">

            <p className="text-white/80">Temperature</p>

            <h2 className="text-4xl font-bold text-white">

                {weather.temperature}°C

            </h2>

        </div>

        <div className="rounded-3xl bg-gradient-to-br from-green-500 to-emerald-700 p-6 shadow-xl">

            <p className="text-white/80">Humidity</p>

            <h2 className="text-4xl font-bold text-white">

                {weather.humidity}%

            </h2>

        </div>

        <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-red-600 p-6 shadow-xl">

            <p className="text-white/80">Wind</p>

            <h2 className="text-4xl font-bold text-white">

                {weather.wind_speed} m/s

            </h2>

        </div>

        <div className="rounded-3xl bg-gradient-to-br from-purple-500 to-indigo-700 p-6 shadow-xl">

            <p className="text-white/80">Visibility</p>

            <h2 className="text-4xl font-bold text-white">

                {weather.visibility} km

            </h2>

        </div>

    </div>

    {/* AI Summary */}

    <div className="rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-8 shadow-2xl">

        <h2 className="text-3xl font-bold text-white mb-5">

            🌤 AI Weather Summary

        </h2>

        <p className="text-xl text-white leading-9">

            {summary}

        </p>

    </div>

    {/* Smart Recommendations */}

    <AIRecommendationCards weather={weather}/>
    <AITravelPlanner weather={weather} />
    <AIDayPlanner weather={weather} />
    {/* Suggested Questions */}

    <div>

        <h2 className="text-white text-3xl font-bold mb-5">

            💡 Suggested Questions

        </h2>

        <div className="flex flex-wrap gap-3">

            {suggestions.map((item)=>(

                <button

                    key={item}

                    onClick={()=>askSuggestion(item)}

                    className="px-5 py-3 rounded-full bg-cyan-500/20 border border-cyan-400 text-white hover:bg-cyan-500 hover:scale-105 transition"

                >

                    {item}

                </button>

            ))}

        </div>

    </div>

    {/* Chat */}

    <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 shadow-xl">

        <h2 className="text-3xl font-bold text-white mb-6">

            💬 AI Chat

        </h2>

        <div className="h-[450px] overflow-y-auto space-y-4 scrollbar-hide">

            {messages.map((msg,index)=>(

                <div

                    key={index}

                    className={`flex ${msg.sender==="user" ? "justify-end" : "justify-start"}`}

                >

                    <div

                        className={`max-w-[75%] px-6 py-4 rounded-3xl shadow-lg

                        ${msg.sender==="user"

                        ? "bg-cyan-600 text-white"

                        : "bg-slate-800 text-white"

                        }`}

                    >

                        {msg.text}

                    </div>

                </div>

            ))}

            {loading &&

            <div className="bg-slate-700 inline-block px-5 py-3 rounded-2xl text-white animate-pulse">

                🤖 AI is thinking...

            </div>

            }

        </div>

        <div className="flex gap-3 mt-8">

            <input

                value={question}

                onChange={(e)=>setQuestion(e.target.value)}

                onKeyDown={(e)=>{

                    if(e.key==="Enter"){

                        askAI();

                    }

                }}

                placeholder="Ask anything about weather..."

                className="flex-1 rounded-2xl bg-slate-900 text-white px-6 py-4 outline-none"

            />

            <button

                onClick={startListening}

                className="w-16 h-16 rounded-2xl bg-purple-600 hover:bg-purple-700 flex items-center justify-center"

            >

                <FaMicrophone className="text-white text-2xl"/>

            </button>

            <button

                onClick={()=>askAI()}

                className="w-16 h-16 rounded-2xl bg-cyan-600 hover:bg-cyan-700 flex items-center justify-center"

            >

                <FaPaperPlane className="text-white text-2xl"/>

            </button>

        </div>

    </div>

</div>

);

}

export default AIAssistant;