import { useSearchParams } from "react-router-dom"
import Button from "../components/Button"
import Heading from "../components/Heading"
import axios from "axios"
import { useState } from "react"

export const SendMoney = () => {
    const [searchParams] = useSearchParams()
    const id = searchParams.get("id")
    const name = searchParams.get("name")
    const [amount,setAmount] = useState("")
    return <div className="bg-gray-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-96 border content-center shadow-lg">
                <div className="text-center">
                    <Heading label={"Send Money"}/>
                </div>
                <div className="mt-11 flex  ml-6">
                    <div className=" rounded-full bg-green-500 h-10 w-10 flex justify-center">
                        <div className="flex flex-col justify-center h-full text-xl text-white">
                            {name[0].toUpperCase()}
                        </div>
                    </div>
                    <h3 className="mx-3 my-1 font-semibold text-xl ">
                        {name}
                    </h3>
                </div>
                <label className="font-semibold my-1 mx-6">
                    Amount (in Rs)
                </label>
                <div className="pl-4 pr-4">
                    <input onChange={(e) => {
                        setAmount(e.target.value)
                    }} min={0} type="number" className="rounded-md w-full px-3 py-2 border" placeholder="Enter Amount"/>
                </div>

                <div>
                    <div className="p-4">
                        <button onClick={async () => {
                            const res = await axios.post("https://paytm-backend-nine.vercel.app/api/v1/account/transfer",{
                                to:id,
                                amount:amount
                            },{
                                headers:{
                                    Authorization: "Bearer " + localStorage.getItem("token")
                                }
                            })
                            alert(res.data.message)
                        }} className="bg-green-500 text-white rounded-md w-full h-9  ring-2 hover:ring-gray-400 me-2 mb-2">
                            Initiate Transfer
                        </button>
                    </div>
                </div>
                
            </div>
            <div>

            </div>
        </div>
    </div>
}