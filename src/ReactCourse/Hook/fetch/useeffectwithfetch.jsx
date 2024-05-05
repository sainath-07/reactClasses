import React, { useEffect, useState } from "react"
import ParentComponent from "./parentfunction"

const FetchapiComponent=()=>{

     const[product,updateproduct]=useState([])

    useEffect(()=>{
           callingproduct()
    },[])

     async function callingproduct(){
        let response = await fetch('https://fakestoreapi.com/products/')
        let result = await response.json()
        updateproduct(result)
        console.log(result)

    }
   
     
   if(product.length==0){
    return(<h1>Fetching the data ......</h1>)
   }

   return(
    <div className="d-flex flex-wrap gap-5 justify-content-center mt-5 " key={product.id}>
      {
        // product.map((p)=><ParentComponent name={p.title} id={p.id} category={p.category}/>)
        product.map((p)=><ParentComponent {...p}  key={p.id}/>)
      }
    </div>
   )


}
export default FetchapiComponent