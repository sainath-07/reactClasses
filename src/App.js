import Home from "./ReactCourse/Functional component hooks/usenavigation & useLocation/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from "./ReactCourse/Functional component hooks/usenavigation & useLocation/about";
import Child from "./ReactCourse/Functional component hooks/dummy/child";

const Render=()=>{
   return(
    <>
    {/* <BrowserRouter>
    
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/about" Component={About}></Route>
    </Routes>
    </BrowserRouter> */}

    <Child/>
    </>
   )
}

export default Render;
