import { useEffect, useState } from "react";

function LiveClock() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (

    <div className="text-right">

      <h2 className="text-4xl font-bold text-white">

        {time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}

      </h2>

      <p className="text-slate-300 text-lg mt-2">

        {time.toLocaleDateString([], {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}

      </p>

    </div>

  );

}

export default LiveClock;