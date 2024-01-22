export type Plan = {
  PRODUCT_CODE: string;
  PRODUCT_ID: string;
  PRODUCT_NAME: string;
  PRODUCT_AMOUNT: string;
};
export function getPlanData(item: Plan) {
  const splitName = item.PRODUCT_NAME.split("-");
  const name = splitName[0].trim();
  const validity = splitName[1].trim().split("(SME)")[0];
  const id = item.PRODUCT_CODE;
  const amount = item.PRODUCT_AMOUNT;
  const plan=item.PRODUCT_ID.split('.')[0]
  return {
    id: id,
    name: name,
    amount: amount,
    validity: validity,
    plan:plan
  };
}
