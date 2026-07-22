function Loading() {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="text-center">

        <div className="w-24 h-24 border-8 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <h2 className="text-white text-3xl font-bold mt-8">
          Loading Weather...
        </h2>

        <p className="text-gray-300 mt-3">
          Please wait...
        </p>

      </div>

    </div>
  );
}

export default Loading;