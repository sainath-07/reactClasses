import Contact from "./ReactCourse/Routing/Contact"
import Home from "./ReactCourse/Routing/Home"
import Login from "./ReactCourse/Routing/Login"
import Services from "./ReactCourse/Routing/services"
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";



const Header=()=>{
  return(
    <>
         <ul>
           <li> <Link to="/">Home</Link> </li>
           <li> <Link to="/service">service</Link> </li>
           <li> <Link to="/login">login</Link> </li>
           <li> <Link to="/Contact">Contact</Link> </li>
         </ul>
    </>
  )
}

const Ui = () => {

 return(
  <>
  <div>div </div>
  <BrowserRouter>
     <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
       <Route path="/service" element={<Services/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/Contact" element={<Contact/>} />
    </Routes>
  </BrowserRouter>
  </>

    //  <>
    //  <Home/>
    //  <Contact/>
    //  <Login/>
    // <Services/>
    //  </>
  )
}

export default Ui
