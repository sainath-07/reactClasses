import { createRef, useRef, useState } from "react"

const Userefhook=()=>{
    const ele=useRef(null)
    const count=useRef(0)
    

    const [val,setVar]=useState(100);

    let u=50

    return(
        <>
        <h1 ref={ele}>UseRef fucntional based component</h1>
        <button onClick={()=>{
            console.log(ele)
            console.log(ele.current)
            ele.current.innerHTML="Update"
        }}>Click</button>


        <hr />
        <h3 >useRef value changes in the browser only if state is changed : {count.current}</h3>
        <h3 >useState, will re-call the function when ever the state changes it means it will re-render the component : {val}</h3>
        <h3 >Normal varaible value : {u}</h3>
        <button onClick={()=>{
            count.current+=1
            console.log("useRef : ",count.current)
            setVar(val+10)
            console.log("This is val useState : ",val)
            u=u+10
            console.log("u value : ",u)
           
        }}>increase</button>
        </>

    )

}


export default Userefhook;