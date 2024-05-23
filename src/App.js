import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "./Reactauthentication/Registerform/registerform";
import LoginForm from "./Reactauthentication/login form/loginform";
import HomePage from "./Reactauthentication/Homepage/home";
import { ToastContainer } from 'react-toastify';


const Render=()=>{
   return(
    <>

{/* <ToastContainer theme="yellow"></ToastContainer> */}
<ToastContainer  style={{

   color : "black",
    // border : "2px solid red"
   }} />

<BrowserRouter>
  <Routes>
    <Route path="/" Component={HomePage}></Route>
    <Route path="/register" Component={RegisterForm}></Route>
    <Route path="/login" Component={LoginForm}></Route>
  </Routes>
</BrowserRouter>
    
    </>
   )
}

export default Render;
