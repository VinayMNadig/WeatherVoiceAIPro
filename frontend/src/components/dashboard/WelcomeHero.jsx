import { FaCloudSun } from "react-icons/fa";
import { motion } from "framer-motion";

function WelcomeHero() {

  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-[35px] bg-gradient-to-r from-blue-700 to-sky-500 shadow-2xl p-12 text-center text-white"
    >

      <FaCloudSun className="text-8xl mx-auto mb-6 text-yellow-300" />

      <h1 className="text-6xl font-bold">

        WeatherVoice AI Pro

      </h1>

      <p className="text-2xl text-blue-100 mt-5">

        AI Powered Weather Forecast

      </p>

      <p className="mt-6 text-lg text-slate-200">

        Search any city to get live weather,
        hourly forecast,
        weather maps,
        AI insights,
        air quality,
        UV index,
        charts and much more.

      </p>

    </motion.div>

  );

}

export default WelcomeHero;