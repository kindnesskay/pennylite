
const apikey = process.env.NEXT_PUBLIC_API_KEY;
const useID = "CK100983883";
export async function getBalance() {
  fetch(
    `https://www.nellobytesystems.com/APIWalletBalanceV1.asp?UserID=${useID}&APIKey=${apikey}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
