import Image from "next/image";
import localFont from "next/font/local";
import {useRouter} from "next/router";



export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen w-full">
    <div className="bg-slate-700 h-32 flex justify-center items-center grid grid-row">
      <p className="text-4xl font-bold text-white">Home Page</p>
      </div>
    <div className="bg-indigo-500 h-screen flex justify-center items-start mt-4">
      <button className="p-8 text-2xl border-4 border-gray-400  rounded-xl bg-gray-300 font-bold hover:bg-blue-300 m-4"
      onClick={() => {
        router.push("idcard");
      }}> 
        idcard
      </button>
    
    <button className="p-8 text-2xl border-4 border-gray-400 rounded-xl bg-gray-300 font-bold hover:bg-blue-300 m-4"
    onClick={() => {
      router.push("hicheel2");
    }}> 
      hicheel2
    </button>
  
    <button className="p-8 text-2xl border-4 border-gray-400 rounded-xl bg-gray-300 font-bold hover:bg-blue-300 m-4"
    onClick={() => {
      router.push("weatherapp");
    }}> 
      weatherapp
    </button>
  
    <button className="p-8 text-2xl border-4 border-gray-400 rounded-xl bg-gray-300 font-bold hover:bg-blue-300 m-4"
    onClick={() => {
      router.push("hicheel4");
    }}> 
      hicheel4
    </button>
 
    <button className="p-8 text-2xl border-4 border-gray-400 rounded-xl bg-gray-300 font-bold hover:bg-blue-300 m-4"
    onClick={() => {
      router.push("hicheel5");
    }}> 
      hicheel5
    </button>
  
    <button className="p-8 text-2xl border-4 border-gray-400 rounded-xl bg-gray-300 font-bold hover:bg-blue-300 m-4"
    onClick={() => {
      router.push("search");
    }}> 
      search
    </button>
    <button className="p-8 text-2xl border-4 border-gray-400 rounded-xl bg-gray-300 font-bold hover:bg-blue-300 m-4"
    onClick={() => {
      router.push("biydaalt");
    }}> 
      biydaalt
    </button>
  </div>
  </div>
  
  );
}
