"use client";

import { currency } from "@/constant";
import { buyData } from "@/lib/buy-data";
import Image from "next/image";

export default function PaymentView({
  mobile,
  plan_code,
  provider,
  provider_code,
  amount,
  handleCancelPayment,
}: {
  mobile: number;
  plan_code: number;
  provider: string;
  provider_code: string;
  amount: number;
  handleCancelPayment: Function;
}) {
  async function handlePayment() {
   await buyData(mobile, provider_code, plan_code);
    
  }
  return (
    <div className=" bg-white p-4 mt-auto mb-auto rounded-lg shadow-lg h-fit w-full max-w-sm ">
      <div className="flex justify-end">
        <button
          onClick={() => handleCancelPayment()}
          className=" h-8 w-8 rounded-full  hover:bg-gray-300 flex items-center justify-center p-2"
        >
          <Image height={20} width={20} alt="close" src={"/close.svg"} />
        </button>
      </div>
      <div className="w-full mb-2 text-center  p-2">
        <div>
          <div className="flex justify-between p-2">
            <p className="text-gray-600">Product Name </p>
            <p className="font-semibold">{provider}</p>
          </div>
          <div className="flex justify-between p-2">
            <p className="text-gray-600">Amount</p>
            <p className="font-semibold">
              {currency}
              {amount}
            </p>
          </div>
          <div className="flex justify-between p-2">
            <p className="text-gray-600">Mobile Number </p>
            <p className="font-semibold">0{mobile}</p>
          </div>
        </div>
      </div>
      <button
        onClick={handlePayment}
        className="w-full text-center h-12 opacity-70 hover:opacity-100 bg-green-600 rounded-full text-white"
      >
        Pay
      </button>
    </div>
  );
}
