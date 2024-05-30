// import Home from "./LazyLoading/Home";
import React,{ Suspense,lazy } from "react";



const Home=lazy(()=>import('./LazyLoading/Home'))
const About=lazy(()=>import('./LazyLoading/About'))

const Render=()=>{
   return(
      <>
      <h1>LazyLoading</h1>
   <Suspense fallback={<h1>Please wait....Home is loading</h1>}>
    <Home/>

   </Suspense>

   <Suspense fallback={<h1>Please wait....About is Loading</h1>} >
      <About/>
   </Suspense>

    </>
   )
}

export default Render;
