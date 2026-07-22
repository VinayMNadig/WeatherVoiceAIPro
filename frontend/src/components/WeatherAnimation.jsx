import { motion } from "framer-motion";

function WeatherAnimation({ weather }) {

  if (!weather) return null;

  const type = weather.weather.toLowerCase();

  if (type.includes("rain")) {

    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {[...Array(120)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: -100,
              x: Math.random() * window.innerWidth,
            }}
            animate={{
              y: window.innerHeight + 100,
            }}
            transition={{
              repeat: Infinity,
              duration: 1 + Math.random(),
              delay: Math.random(),
            }}
            className="absolute w-[2px] h-8 bg-cyan-300 opacity-50"
          />
        ))}
      </div>
    );
  }

  if (type.includes("cloud")) {

    return (
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">

        <motion.div
          animate={{ x: [0, 300, 0] }}
          transition={{ repeat: Infinity, duration: 30 }}
          className="absolute top-24 left-10 text-[170px] opacity-20"
        >
          ☁
        </motion.div>

        <motion.div
          animate={{ x: [400, -100, 400] }}
          transition={{ repeat: Infinity, duration: 45 }}
          className="absolute top-52 right-20 text-[140px] opacity-20"
        >
          ☁
        </motion.div>

      </div>
    );

  }

  if (type.includes("clear")) {

    return (

      <motion.div

        animate={{ rotate: 360 }}

        transition={{

          repeat: Infinity,

          duration: 60,

          ease: "linear"

        }}

        className="fixed top-16 right-16 text-[180px] opacity-20 pointer-events-none -z-10"

      >

        ☀

      </motion.div>

    );

  }

  if (type.includes("snow")) {

    return (

      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">

        {[...Array(70)].map((_, i) => (

          <motion.div

            key={i}

            initial={{
              y: -20,
              x: Math.random() * window.innerWidth,
            }}

            animate={{
              y: window.innerHeight + 50,
            }}

            transition={{

              repeat: Infinity,

              duration: 6 + Math.random() * 5,

              delay: Math.random(),

            }}

            className="absolute text-white text-xl"

          >

            ❄

          </motion.div>

        ))}

      </div>

    );

  }

  return null;

}

export default WeatherAnimation;