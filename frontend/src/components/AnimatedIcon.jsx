import { motion } from "framer-motion";

function AnimatedIcon({ icon }) {

return(

<motion.img

animate={{

scale:[1,1.1,1]

}}

transition={{

repeat:Infinity,

duration:2

}}

src={`https://openweathermap.org/img/wn/${icon}@4x.png`}

className="w-52 mx-auto"

/>

);

}

export default AnimatedIcon;