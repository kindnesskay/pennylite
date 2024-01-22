const apikey = process.env.NEXT_PUBLIC_API_KEY;
const userID = "	CK100983883";
export async function buyData(
  mobile: number,
  networkcode: string,
  plan: number
) {
  fetch(
    `https://www.nellobytesystems.com/APIDatabundleV1.asp?UserID=${userID}&APIKey=${apikey}&MobileNetwork=${networkcode}&DataPlan=${plan}&MobileNumber=0${mobile}&CallBackURL=http://localhost:3000`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
