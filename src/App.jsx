import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from "./pages/SignUp"
import { Signin } from "./pages/SignIn"
import { Dashboard } from "./pages/Dashboard"
import { SendMoney } from "./pages/SendMoney"




function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup/>} /> 
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/sendmoney" element={<SendMoney/>}/>
          
        </Routes>
       </BrowserRouter>
      
    </>
  )
}
export default App
