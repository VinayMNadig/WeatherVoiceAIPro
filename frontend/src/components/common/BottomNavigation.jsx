import {
FaHome,
FaMapMarkedAlt,
FaChartBar,
FaRobot
}
from "react-icons/fa";

function BottomNavigation(){

return(

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full px-8 py-4 flex gap-10 shadow-2xl z-50">

<FaHome className="text-white text-2xl cursor-pointer hover:text-cyan-400"/>

<FaMapMarkedAlt className="text-white text-2xl cursor-pointer hover:text-cyan-400"/>

<FaChartBar className="text-white text-2xl cursor-pointer hover:text-cyan-400"/>

<FaRobot className="text-white text-2xl cursor-pointer hover:text-cyan-400"/>

</div>

);

}

export default BottomNavigation;