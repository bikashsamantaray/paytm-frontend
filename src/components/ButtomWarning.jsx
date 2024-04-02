import {Link} from "react-router-dom"

export default function ButtomWarning({
    label,
    buttonText,
    to
}){
    return(
        <>
            <div className="flex justify-center pb-5">

                <div>
                    {label}
                </div>
                <div>
                    <Link className="pointer underline pl-1" to={to}>
                        {buttonText}
                    </Link>
                </div>

            </div>
        </>

    )
}