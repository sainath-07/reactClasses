import { useEffect, useState } from "react";

const Useeffect=()=>{

    const [time,updatetimer]=useState(0)
    const [counter,updatecounter]=useState(0)
     useEffect(()=>{
        console.log("inside the useeffect")
    },[counter])

    return(
        <>
        <h1>timer : {time+counter}</h1>
        {console.log("inside component")}
        
        <button onClick={()=>{
                   updatetimer(time+1)
         }}>updatetimer
         </button>


        <button onClick={()=>{
                    
                   updatecounter(counter+1)
         }}>updatecounter
         </button>
        </>
    )

}
export default Useeffect;