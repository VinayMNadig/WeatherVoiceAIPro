import { useState } from "react";
import {
  FaRobot,
  FaPaperPlane,
  FaMicrophone,
} from "react-icons/fa";

function WeatherChat({ weather }) {

  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // ==========================
  // Voice Recognition
  // ==========================

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

    };

  }

  // ==========================
  // Voice Output
  // ==========================

  function speak(text) {

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

  }

  // ==========================
  // Ask AI
  // ==========================

  async function askAI() {

    if (!question.trim()) return;

    const userQuestion = question;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userQuestion,
      },
    ]);

    setQuestion("");

    setLoading(true);

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
            weather: weather,
          }),
        }
      );

      const data = await response.json();

      console.log("AI Response:", data);

      if (!response.ok) {

        throw new Error(data.error || "AI request failed");

      }

      const aiAnswer = data.answer;

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: aiAnswer,
        },
      ]);

      speak(aiAnswer);

    } catch (err) {

      console.error("AI Error:", err);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: err.message,
        },
      ]);

    } finally {

      setLoading(false);

    }

  }

  // ==========================
  // UI
  // ==========================

  return (

    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8">

      <div className="flex items-center gap-4 mb-8">

        <FaRobot className="text-cyan-400 text-5xl" />

        <div>

          <h2 className="text-3xl font-bold text-white">

            AI Weather Assistant

          </h2>

          <p className="text-slate-300">

            Ask anything about today's weather

          </p>

        </div>

      </div>

      {/* Chat */}

      <div className="bg-slate-900/40 rounded-2xl h-96 overflow-y-auto p-5 space-y-5">

        {messages.length === 0 && (

          <div className="text-center text-slate-400 mt-20">

            <FaRobot className="mx-auto text-5xl mb-4 text-cyan-400"/>

            <p>Try asking:</p>

            <p className="mt-3">• Can I go outside today?</p>

            <p>• Should I carry an umbrella?</p>

            <p>• Is today good for cycling?</p>

            <p>• What clothes should I wear?</p>

          </div>

        )}

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`flex ${
              msg.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            <div
              className={`max-w-[75%] px-5 py-4 rounded-2xl text-white ${
                msg.sender === "user"
                  ? "bg-cyan-600"
                  : "bg-slate-700"
              }`}
            >

              {msg.text}

            </div>

          </div>

        ))}

        {loading && (

          <div className="flex justify-start">

            <div className="bg-slate-700 rounded-2xl px-5 py-4 text-white">

              🤖 AI is thinking...

            </div>

          </div>

        )}

      </div>

      {/* Input */}

      <div className="flex gap-3 mt-6">

        <input

          value={question}

          onChange={(e) => setQuestion(e.target.value)}

          onKeyDown={(e) => {

            if (e.key === "Enter") {

              askAI();

            }

          }}

          placeholder="Ask anything about weather..."

          className="flex-1 bg-slate-800 rounded-xl px-5 py-4 text-white outline-none"

        />

        <button

          onClick={startListening}

          className="bg-purple-600 hover:bg-purple-700 text-white px-5 rounded-xl transition"

        >

          <FaMicrophone/>

        </button>

        <button

          onClick={askAI}

          className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 rounded-xl transition"

        >

          <FaPaperPlane/>

        </button>

      </div>

    </div>

  );

}

export default WeatherChat;