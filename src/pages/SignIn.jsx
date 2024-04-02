import { useEffect, useState } from "react"
import ButtomWarning from "../components/ButtomWarning"
import Button from "../components/Button"
import Heading from "../components/Heading"
import Inputbox from "../components/Inputbox"
import SubHeading from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export const Signin = () => {
    const [username,setuserName] = useState("")
    const [password,setpassword] = useState("")
    const navigate = useNavigate()


    return <div className="bg-gray-500 h-screen flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className="bg-white rounded-lg content-center w-80 text-center">
                        <Heading label={"Sign In"}/>
                        <SubHeading label={"Enter your credential to access your account"}/>
                        <Inputbox onChange={(e) => {
                            setuserName(e.target.value)
                        }} title={"Email"} placeholder={"bikash@gmail.com"}/>
                        <Inputbox onChange={(e) => {
                            setpassword(e.target.value)
                        }} title={"password"} placeholder={"123456"}/>
                        <Button onClick={async () =>{
                            const res = await axios.post("https://paytm-backend-nine.vercel.app/api/v1/user/signin",
                            {
                                username,
                                password
                            })
                            const token = res.data.token
                            const name = res.data.name
                         localStorage.setItem("token",token)   
                         if(token){
                            navigate("/dashboard?name="+name)
                         }else{
                            alert("sorry")
                         }
                        }
                        
                        } title={"Sign In"}/>
                        <ButtomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
                    </div>
                </div>
        
            </div>
}