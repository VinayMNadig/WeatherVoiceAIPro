import { motion } from "framer-motion";

function FloatingWeather({ weather }) {

if(!weather) return null;

return(

<motion.div

animate={{

y:[0,-20,0]

}}

transition={{

repeat:Infinity,

duration:3

}}

className="fixed bottom-10 right-10 bg-white/20 backdrop-blur-xl rounded-full px-6 py-4 text-white shadow-2xl"

>

🌡 {weather.temperature}°

</motion.div>

);

}

export default FloatingWeather;