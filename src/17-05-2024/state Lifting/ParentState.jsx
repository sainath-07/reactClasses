import { useState } from "react"
import ChildState, { Text } from "./ChildState"

const ParentState=()=>{

    const [count,setCount]=useState(0)


    const handlecount=(value)=>{
       switch(value){
        case "INCREMENT":
            setCount(count+1)
            break

        case "DECREMENT":
           if(count>0) setCount(count-1)
            break
        case "RESET" :
            setCount(0)
       }
    }


    return(
        <>
        <h1>Parentstate</h1>
        <h1>{count}</h1>
        <Text text={"text "}/>
        <ChildState press={()=>handlecount("INCREMENT")}>Increment</ChildState>
        <ChildState press={()=>handlecount("DECREMENT")}>Decrement</ChildState>
        <ChildState press={()=>handlecount("RESET")}>Reset</ChildState>

        </>
    )
}
export default ParentState