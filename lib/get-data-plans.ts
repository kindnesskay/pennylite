import { getPlanData } from "./getPlanData";

const useID = "CK100983883";

export async function getDataPlans(mobile_network: string) {
  if (!mobile_network) return false;
  return await fetch(
    `https://www.nellobytesystems.com/APIDatabundlePlansV2.asp?UserID=${useID}`
  )
    .then((res) => res.json())
    .then((data) => {
      return data.MOBILE_NETWORK[mobile_network];
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
}
export type resData = [
  {
    PRODUCT_CODE: string;
    PRODUCT_ID: string;
    PRODUCT_NAME: string;
    PRODUCT_AMOUNT: string;
  }
];

export function getSmePlans(data: resData) {
  return data.filter((item) => {
    return item.PRODUCT_NAME.includes("(SME)");
  });
}
