import { useState } from "react"
import ButtomWarning from "../components/ButtomWarning"
import Button from "../components/Button"
import Heading from "../components/Heading"
import Inputbox from "../components/Inputbox"
import SubHeading from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signup = () => {

    const [firstname, setFirstName] = useState("")
    const [lastname, setlastName] = useState("")
    const [username, setuserName] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate();



    return <div className="bg-gray-500 h-screen flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className="bg-white rounded-lg content-center w-80 text-center">
                        <Heading label={"Signup"}/>
                        <SubHeading label={"Enter your information to create an account"}/>
                        <Inputbox onChange={e => {
                            setFirstName(e.target.value)
                        }} title={"First name"} placeholder={"Bikash"}/>
                        <Inputbox onChange={e => {
                            setlastName(e.target.value)
                        }} title={"Last name"} placeholder={"Samantaray"}/>
                        <Inputbox onChange={e => {
                            setuserName(e.target.value)
                        }} title={"Email"} placeholder={"bikash@gmail.com"}/>
                        <Inputbox onChange={e => {
                            setpassword(e.target.value)
                        }} title={"Password"} placeholder={"123456789"}/>
                        <div className="p-4">
                            <Button onClick={async () => {
                                const response = await axios.post("https://paytm-backend-nine.vercel.app/api/v1/user/signup", {
                                    username,
                                    firstname,
                                    lastname,
                                    password
                                })
                                const token = response.data.token
                                const msg = response.data.msg
                                localStorage.setItem("token", token)
                                
                                if(token){
                                    navigate("/dashboard?name="+firstname)
                                }
                                alert(msg)

                            }} title={"Signup"}/>
                        </div>
                        <ButtomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
                    </div>
                </div>
        
            </div>
}