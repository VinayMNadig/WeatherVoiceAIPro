function RecentSearches({ setWeather }) {

  const recent =
    JSON.parse(localStorage.getItem("recentSearches")) || [];

  async function load(city){

    const res = await fetch(
`http://127.0.0.1:5000/weather?city=${city}`
    );

    const data = await res.json();

    setWeather(data);

  }

  return(

<div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8">

<h2 className="text-3xl font-bold text-white mb-8">

Recent Searches

</h2>

<div className="flex flex-wrap gap-4">

{recent.map(city=>(

<button

key={city}

onClick={()=>load(city)}

className="bg-cyan-500 hover:bg-blue-600 rounded-full px-6 py-3 text-white"

>

{city}

</button>

))}

</div>

</div>

);

}

export default RecentSearches;