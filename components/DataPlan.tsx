export default function DataPlan({
  name,
  validity,
  amount,
}: {
  name: string;
  validity: string;
  amount: number;
}) {
  
  return (
    <div className="w-24 h-24 flex flex-col justify-center items-center hover:cursor-pointer ">
      <p className="font-bold">{name}</p>
      <p>{validity}</p>
      <p>{amount}</p>
    </div>
  );
}
