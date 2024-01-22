"use client";
import { useState } from "react";
import DataPlan from "./DataPlan";
export type plans = Array<plan>;

export type plan = {
  name: string;
  amount: number;
  validity: string;
  id: string;
  plan:number
};
export default function PlansListing({
  data_array,
  getChoice,
}: {
  data_array: plans;
  getChoice: Function;
}) {
  const [selected, setSelected] = useState("");
  return (
    <>
    {!data_array.length && <p className="text-center">Nothing to display here</p>}
      <div className="grid grid-cols-2 xxs:grid-cols-3  gap-y-4 gap-x-2">
        {data_array.length > 0 &&
          data_array.map((plan: plan) => {
            return (
              <div
                className={`${
                  selected == plan.id ? "bg-slate-200" : "bg-white"
                } ml-auto mr-auto rounded-xl shadow-md font-mono`}
                onClick={() => {
                  getChoice(plan);
                  setSelected(plan.id);
                }}
                key={plan.id}
              >
                <DataPlan
                  name={plan.name}
                  amount={plan.amount}
                  validity={plan.validity}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}
