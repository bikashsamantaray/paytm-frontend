import { useEffect, useState } from "react"
import Button from "./Button"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Users = () => {

    const [users, setUsers] = useState([])
    const [filter,setFilter] = useState("")


    useEffect(() => {
        axios.get("https://paytm-backend-nine.vercel.app/api/v1/user/bulk?filter=" + filter)
        .then(response => {
            setUsers(response.data.user)
        })
        
    },[filter])

    return <div >
       
       <div className="ml-4 mr-4 mt-4">
        <input onChange={(e) => {
            setFilter(e.target.value)
        }} className="border w-full rounded h-8 border-slate-200" type="text" placeholder="Search users..." />
       </div>
       <div className=" font-bold p-4">
        Users
       </div>
       <div>
        {users.map(user => <User user={user}/>)}
       </div>
    </div>
}

function User({user}){

    const navigate = useNavigate();

    return <div className="flex justify-between">

        <div className="flex">

            <div className="p-4">
                <div className=" rounded-full bg-slate-200 h-10 w-10 flex justify-center">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstname[0]}
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center">
                <div>
                    {user.firstname} {user.lastname}
                </div>
            </div>

        </div>

        <div className="flex flex-col justify-center">
            <Button onClick={(e) => {
                navigate("/sendmoney?id="+ user._id + "&name=" + user.firstname )
            }} title={"Send Money"}/>
        </div>
        
    </div>

}