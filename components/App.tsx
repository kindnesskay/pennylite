"use client";
import { useEffect, useState } from "react";
import PlansListing, { plan } from "./PlansListing";
import Top from "./Top";
import { getDataPlans, getSmePlans } from "@/lib/get-data-plans";
import { getPlanData } from "@/lib/getPlanData";
import ConfirmPayment from "./ConfirmPayment";
import PaymentView from "./PaymentView";
import { getBalance } from "@/lib/get-balance";
export default function App() {
  const [provider, setProvider] = useState({ name: "MTN", code: "01" });
  const [data, setData] = useState([]);
  const [choice, setChoice] = useState<plan | null>(null);
  const [home, setHome] = useState(true);
  const [mobile, setMobile] = useState("");
  const [paymentView, setpaymentView] = useState(false);
  const [ConfirmationView, setConfirmationView] = useState(false);
  useEffect(() => {
    setChoice(null);
    async function handler() {
      let data_plans_array = [];
      const response = await getDataPlans(provider.name);
      const query = response[0]["PRODUCT"];
      const smePlans = getSmePlans(query);
      smePlans.map((plan) => {
        let plans_data = getPlanData(plan);
        return data_plans_array.push(plans_data);
      });
      setData(data_plans_array);
    }
    handler();
  }, [provider]);

  useEffect(() => {
    getBalance();
  }, []);
  useEffect(() => {
    setConfirmationView(false);
    if (mobile.length < 10) return;
    if (!choice) return;
    setConfirmationView(true);
  }, [choice, mobile]);
  function handleChoiceClick() {}
  function handlePayment() {
    closeAll();
    setpaymentView(true);
  }
  function handleCancelPayment() {
    closeAll();
    setHome(true);
  }
  function closeAll() {
    setHome(false);
    setConfirmationView(false);
    setpaymentView(false);
  }
  return (
    <div className="px-1 min-h-screen pb-8 w-screen flex flex-col items-center">
      {home && (
        <div className="flex flex-col items-center gap-4 w-full max-w-md pb-4 overflow-x-hidden">
          <Top getProvider={setProvider} getMobile={setMobile} />
          <PlansListing
            data_array={data}
            getChoice={setChoice}
            key={provider.code}
          />
        </div>
      )}
      {ConfirmationView && <ConfirmPayment handleClick={handlePayment} />}
      {paymentView && choice && (
        <PaymentView
          amount={choice.amount}
          mobile={Number(mobile)}
          provider={provider.name}
          handleCancelPayment={handleCancelPayment}
          plan_code={Number(choice.plan)}
          provider_code={provider.code}
        />
      )}
    </div>
  );
}
