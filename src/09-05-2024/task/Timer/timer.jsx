import { useState } from "react"

const Timer=()=>{

 const [count,setcount]=useState(0)
 const [value,setvalue]=useState(null)

const starttimer=()=>{
  

      
           let demo=setInterval(() => {
                setcount(count=>count+1)
             }, 500);
             setvalue(demo)

             



        
}


const stoptimer=()=>{
    clearInterval(value)
    setvalue(null)
}


    return(
        <>
        <h1>cont : {count}</h1>
        <button onClick={starttimer}>start</button>
        <button onClick={stoptimer}>stop</button>
        </>
    )
}
export default Timer