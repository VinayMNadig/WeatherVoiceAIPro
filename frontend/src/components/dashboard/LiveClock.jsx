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

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6 text-center">

      <h2 className="text-white text-xl">

        Local Time

      </h2>

      <h1 className="text-5xl font-bold text-white mt-3">

        {time.toLocaleTimeString()}

      </h1>

    </div>

  );

}

export default LiveClock;