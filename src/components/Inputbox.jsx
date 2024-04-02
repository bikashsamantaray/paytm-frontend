export default function Inputbox({title,placeholder,onChange}){
    return(
        <>
            <div>
                <div className="text-start pl-4 pt-3 font-medium">
                    {title}
                </div>
                <div className="pl-3 pr-3">
                    <input onChange={onChange} placeholder={placeholder} className="border-slate-200 border w-full px-2 py-1 rounded-lg"></input>
                </div>

            </div>
        </>
    )
}