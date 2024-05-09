import { useState } from "react"
import Button from "./button"

const Counter=()=>{

    const [count,updaterfunction]=useState(0)
    const [subscribe,issubscribe]=useState(false)


    const useraction=(para)=>{
           switch(para){
              case "INCRE" :
                updaterfunction(count+1)
                break;
              case "DECRE" :
                if(count>0){

                    updaterfunction(count-1)
                }
                break;

                case "RESET" :
                    
                    updaterfunction(0)
              
           }
    }

    const setsubscribe=()=>{
        issubscribe(!subscribe)
    }
    return(
        <>
         <h1>Count : {count}</h1>
         {/* <button onClick={()=>useraction("INCRE")}>Increment</button>
         <button onClick={()=>useraction("DECRE")}>decrecement</button>
         <button onClick={()=>useraction("RESET")}>reset</button> */}

         {
            subscribe  && 
            <>
         <Button action={()=>useraction("INCRE")}>Increment</Button>
         <Button action={()=>useraction("DECRE")}>Decrement</Button>
         <Button action={()=>useraction("RESET")}>Reset</Button>
            </>
         }


         <button  style={{backgroundColor:"black",color:"white"}} onClick={setsubscribe}> {subscribe ? "Unsubscribe":"subscribe"}</button>
        </>


    )

}
export default Counter