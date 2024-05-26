import { useCallback, useState } from "react"
import CallbackChild from "./callbackchild"
import Counter from "./counter"

const CallbackParent=()=>{
   const [count,setcount]=useState(0)
    const [add,setadd]=useState(["may 26"])

    const handlecount=()=>{
        setcount(count+1)
    }

    const handleadd= useCallback(()=>{
        setadd([...add,"next+++"])
    },[add])

   



    return(
        <>
        <Counter  count={count} />
        <button onClick={handlecount}>parent click</button>
        <h1>parent file</h1>
        <CallbackChild  add={add} handleadd={handleadd}/>

        </>
    )
}

export default CallbackParent;