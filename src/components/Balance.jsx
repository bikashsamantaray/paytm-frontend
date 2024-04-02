export default function Balance({
    amount
}) {
    return <div className=" flex mt-4 ml-4 font-medium">
        <div className=" font-medium">
            Your Balance
        </div>
        <div className="ml-4">
            Rs. {Math.round(amount * 100) / 100}
        </div>
    </div>
}