import Home from "./ReactCourse/Functional component hooks/usenavigation & useLocation/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from "./ReactCourse/Functional component hooks/usenavigation & useLocation/about";

const Render=()=>{
   return(
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/about" Component={About}></Route>
    </Routes>
    </BrowserRouter>
    </>
   )
}

export default Render;
