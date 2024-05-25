import { useState } from "react"

const Timer=()=>{

 const [count,setcount]=useState(0)



const timer =(type)=>{

   let timerstart= setInterval(()=>{
        if(type!='stop'){
            setcount(count=>count+1)
        }
        else{
            clearInterval(timerstart)
            console.log('clear')
        }
    },1000)
}


// const stopTimer =()=>{
//     // console.log("")
//     clearInterval(startTImer)
// }


// let demo=setInterval(startTImer, 500);
//     const startTImer =()=>{
//         setcount(count=>count+1)
//     }

// const stopTimer =()=>{
  
//     clearInterval(demo)
// }





    return(
        <>
        <h1>cont : {count}</h1>
        <button onClick={timer}>start</button>
        <button onClick={()=>timer('stop')}>stop</button>
        </>
    )
}
export default Timer