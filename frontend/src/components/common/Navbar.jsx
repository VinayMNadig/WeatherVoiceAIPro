import { FaCloudSun } from "react-icons/fa";

function Navbar() {

  return (

    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/10 border-b border-white/20">

      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        <div className="flex items-center gap-4">

          <FaCloudSun className="text-5xl text-yellow-300"/>

          <div>

            <h1 className="text-3xl font-bold text-white">

              WeatherVoice AI Pro

            </h1>

            <p className="text-slate-300">

              AI Powered Weather Forecast

            </p>

          </div>

        </div>

      </div>

    </header>

  );

}

export default Navbar;