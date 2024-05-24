import { useState } from "react"

const useCustom=(receivevalue,scale)=>{
    const [value,setvalue]=useState(receivevalue,scale)

    const increment=()=>{
         setvalue(value+scale)
    }

    const decrement=()=>{
        if(value>0) setvalue(value-scale)
    }
    
    const reset=()=>{
        setvalue(0)
    }

    return [increment,decrement,reset,value]
}

export default useCustom;