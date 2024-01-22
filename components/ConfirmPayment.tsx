
export default function ConfirmPayment({handleClick}:{handleClick:Function}) {
  return (
    <div className="w-full px-4 flex justify-center">
        <button className="w-full shadow-md  h-12 max-w-xs rounded bg-green-600 hover:bg-green-700 text-white font-semibold" onClick={()=>handleClick()}>
            Confirm payment
        </button>

    </div>
  )
}
