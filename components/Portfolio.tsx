import { currency } from "@/constant";

export default function Portfolio() {
  return (
    <div className="w-full  flex p-2 px-4 h-32 justify-around bg-blue-400 rounded-lg shadow-lg flex-col">
      <div className="flex justify-between">
        <div>
          <p className="text-white font-normal text-sm " >Balance</p>
          <p className="font-bold text-white text-2xl">{currency} 1000.00</p>
        </div>
        <div>
          <p className="text-white font-normal text-sm">Transaction History {'>'} </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="bg-white text-blue-400  font-semibold p-1 px-2 rounded-lg">
            Add Money
        </button>
        <div>
        <p className="text-white">Account name</p>
        <p className="text-white">1234567890</p>
        </div>
      </div>
    </div>
  );
}
