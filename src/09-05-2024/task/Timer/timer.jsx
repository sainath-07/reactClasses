import { useState } from "react"

const Timer=()=>{

 const [count,setcount]=useState(0)

const starttimer=()=>{
        const time= setInterval(() => {
            setcount(count=>count+1)
         }, 500);
}



    return(
        <>
        <h1>cont : {count}</h1>
        <button onClick={starttimer}>start</button>
        {/* <button onClick={()=>starttimer("stop")}>stop</button> */}
        </>
    )
}
export default Timer