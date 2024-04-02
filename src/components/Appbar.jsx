
export default function  AppBar ({name}) {
    
    return(
        <>
            <div className="flex justify-between shadow-md pl-4 p-1">

                <div className="flex flex-col justify-center">
                    Paytm app

                </div>

                <div className="flex">
                    <div className="flex flex-col justify-center">
                        Hello, 
                    </div>

                    <div className="flex flex-col justify-center pr-4 pl-1">
                        {name.toUpperCase()}
                    </div>
                    
                    <div className=" rounded-full bg-slate-200 h-10 w-10 flex justify-center">
                        <div className="flex flex-col justify-center h-full text-xl">
                            {name[0].toUpperCase()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}