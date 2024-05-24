import { useMemo, useState } from "react"

const UseMemo=()=>{

    const [counter1,setcounter1]=useState(1)
    const [counter2,setcounter2]=useState(1)


    const changecounter1=()=>{
        setcounter1(counter1+1)
    }
    const changecounter2=()=>{
        setcounter2(counter2+1)
    }


    // here evenorodd is a function expression
    const Evenorodd=useMemo(()=>{
        // console.log("evenorodd")
        return counter1%2===0 ? "Even" : "Odd"
    },[counter1])

    // const Evenorodd=()=>{
    //             console.log("evenorodd")
    //             return counter1%2===0 ? "Even" : "Odd"
    // }

    

    return(
        <>
        <h3>useMemo hook</h3>
         <h3>counter 1 count : {counter1} {Evenorodd}</h3>
         <h3>counter 2 count : {counter2}</h3>

         <button onClick={changecounter1}>counter1 btn</button>
         <button onClick={changecounter2}>counter2 btn</button>
        </>
    )

}
export default UseMemo