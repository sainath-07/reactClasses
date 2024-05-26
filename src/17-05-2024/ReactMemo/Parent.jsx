import { useState } from "react"
import Child from "./child"

const Parent=()=>{
    const [count,setcount]=useState(0)
    const useraction=()=>{
        setcount(count+1)
    }


    const demo=()=>{
        console.log("demo function")
    }

    
       return(
        <>
        <Child />
        <h1>{count}</h1>
        <button onClick={useraction} >click</button>
        </>
       )
}

export default Parent