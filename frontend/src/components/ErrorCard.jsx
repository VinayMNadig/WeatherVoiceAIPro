import { FaExclamationTriangle } from "react-icons/fa";

function ErrorCard({ message }) {

  if (!message) return null;

  return (

    <div className="max-w-3xl mx-auto mt-10">

      <div className="bg-red-600/20 border border-red-500 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">

        <div className="flex items-center gap-5">

          <FaExclamationTriangle className="text-6xl text-red-400" />

          <div>

            <h2 className="text-3xl font-bold text-white">
              Oops!
            </h2>

            <p className="text-xl text-red-200 mt-2">
              {message}
            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default ErrorCard;