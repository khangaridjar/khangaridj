import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isGrid, setIsGrid] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch("https://mongol-api-rest.vercel.app/touristAttractions");
        const response2 = await fetch("https://mongol-api-rest.vercel.app/clothes");
        const response3 = await fetch("https://mongol-api-rest.vercel.app/instruments");
        const response4 = await fetch("https://mongol-api-rest.vercel.app/historicalTools");
        const response5 = await fetch("https://mongol-api-rest.vercel.app/ethnicGroups");
        const response6 = await fetch("https://mongol-api-rest.vercel.app/provinces");
        const response7 = await fetch("https://mongol-api-rest.vercel.app/historicalFigures");

        const result1 = await response1.json();
        const result2 = await response2.json();
        const result3 = await response3.json();
        const result4 = await response4.json();
        const result5 = await response5.json();
        const result6 = await response6.json();
        const result7 = await response7.json();

        setData([
          ...Object.values(result1).flat(),
          ...Object.values(result2).flat(),
          ...Object.values(result3).flat(),
          ...Object.values(result4).flat(),
          ...Object.values(result5).flat(),
          ...Object.values(result6).flat(),
          ...Object.values(result7).flat(),
        ]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-yellow-200 p-6">
      <h1 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-lg">
        Mongol API
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full md:w-1/2"
        />
        <button 
          onClick={() => setIsGrid(!isGrid)} 
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {isGrid ? "Switch to List View" : "Switch to Grid View"}
        </button>
      </div>

      <div className={`w-full ${isGrid ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col gap-6"}`}>
        {filteredData.length === 0 ? (
          <div className="w-full text-center text-xl font-bold text-red-500">
            Data oldsongui
          </div>
        ) : (
          filteredData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h2 className="text-xl font-bold">{item?.name}</h2>
              <p className="text-black mt-2">{item?.description}</p>
              {item?.images && <img src={item?.images} alt={item?.name} className="h-64 w-full object-cover rounded-md mt-2" />}
              {item?.address?.country && <h3 className="text-lg mt-2 font-semibold">{item?.address?.country}</h3>}
              <button className="mt-4 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">More</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
