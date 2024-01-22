"use client";
import { useEffect, useState } from "react";
export default function Providers({
  getNetworkProvider,
}: {
  getNetworkProvider: Function;
}) {
  const [provider, setProvider] = useState({name:"MTN",code:'01'});

  useEffect(() => {
    getNetworkProvider(provider);
  }, [provider]);
  return (
    <div>
      <div className="w-full font-mono p-1 justify-around flex gap-4">
        <button
          onClick={() => setProvider({name:"MTN",code:'01'})}
          className="w-20 p-2 text-gray-700 font-semibold hover:bg-slate-400  hover:text-white bg-white rounded-lg shadow-lg"
        >
          MTN
        </button>
        <button
          onClick={() => setProvider({name:"Airtel",code:'04'})}
          className="w-20 p-2 text-gray-700 font-semibold hover:bg-slate-400  hover:text-white rounded-lg shadow-lg"
        >
          AIRTEL
        </button>
        <button
          onClick={() => setProvider({name:"Glo",code:'02'})}
          className="w-20 p-2 text-gray-700  font-semibold hover:bg-slate-400 hover:text-white rounded-lg shadow-lg"
        >
          GLO
        </button>
      </div>
    </div>
  );
}
