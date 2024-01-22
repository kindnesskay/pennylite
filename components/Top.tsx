import { useEffect, useState } from "react";
import Providers from "./Providers";

export default function Top({
  getProvider,
  getMobile,
  
}: {
  getProvider: Function;
  getMobile: Function;
}) {
  const [provider, setProvider] = useState({name:"MTN",code:'01'});
  const [phone, setPhone] = useState("");
  useEffect(() => {
    getProvider(provider);
  }, [provider]);
  useEffect(() => {
    getMobile(phone);
  }, [phone]);
  return (
    <>
      <div className="flex h-12 rounded-lg overflow-hidden mt-4 bg-white">
        <div className="w-20 text-gray-700  h-full p-2 flex justify-center items-center">
          <p className=" font-semibold cursor-pointer font-mono">
            {(provider && provider.name.toUpperCase()) || ""}
          </p>
        </div>
        <input
          type="text"
          max={10}
          onChange={(e) => {
            if (
              (e.target.value.length > 0 && !Number(e.target.value)) ||
              e.target.value.length == 11
            )
              return;
            setPhone(e.target.value);
          }}
          placeholder="phone number"
          value={phone}
          className="flex-grow rounded-lg p-2 font-semibold"
        />
      </div>
      <Providers getNetworkProvider={setProvider} />
    </>
  );
}
