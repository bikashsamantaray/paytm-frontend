export default function Button({title,onClick}){

    return(
        <div className="p-4">
            <button onClick={onClick} className="bg-gray-800 text-white rounded-md w-full h-9 text-sm ring-2 hover:ring-gray-500 me-2 mb-2 ">{title}</button>
        </div>
    )
}