import { useEffect, useState } from "react"
import AppBar from "../components/Appbar"
import Balance from "../components/Balance"
import { Users } from "../components/User"
import axios from "axios"
import { useSearchParams } from "react-router-dom"

export const Dashboard = () => {

    const [balance,setBalance] = useState("")
    const [searchParams] = useSearchParams()
    const name = searchParams.get("name")

    useEffect(() => {
        axios.get("https://paytm-backend-nine.vercel.app/api/v1/account/balance",
       {
            headers:{
                Authorization:"Bearer "+localStorage.getItem("token")
            }
        })
        .then(res => {
            setBalance(res.data.balance)
        })

    },[])

    return <div>
        <AppBar name={name}/>
        <Balance amount= {balance}/>
        <Users/>
    </div>
}