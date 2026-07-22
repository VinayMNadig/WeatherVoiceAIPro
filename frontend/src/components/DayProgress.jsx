import {
CircularProgressbar,
buildStyles
}
from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

function DayProgress(){

const now=new Date();

const value=((now.getHours()*60)+now.getMinutes())/1440*100;

return(

<div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">

<h2 className="text-white text-2xl font-bold mb-8">

🌅 Day Progress

</h2>

<CircularProgressbar

value={value}

text={`${Math.round(value)}%`}

styles={buildStyles({

pathColor:"#facc15",

textColor:"#fff",

trailColor:"#1e293b"

})}

/>

</div>

);

}

export default DayProgress;