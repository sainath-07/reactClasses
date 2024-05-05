import { useState } from "react";

const Databinding=()=>{

    const [variable,udpatevalue]=useState(100 )
    
    return(
       <>
        <h1> value : {variable}</h1>
         {/* one way data binding */}
        <button   onClick={()=>udpatevalue(200 )} >Click</button> <br />
        {/* two way data binding */}
        <input type="text"  value={variable}  onChange={(e)=>{
            let newvalue = e.target.value
            udpatevalue(newvalue)
        }}/>
         
       </>
   )
      
}

export default Databinding;