import { useCallback, useState } from "react"
import UsecallbackHeading from "./UsecallbackHeading"
import Todoviewer from "./todoviwer"

const UseCallBackExample=()=>{

             
            const [todo,settodo]=useState(["May 23 react class"])

            const [salary,setsalary]=useState(1000)
        
         const addtodos= useCallback(()=>{
            settodo([...todo,"new Product"])
         },[todo])

         


            const salincrement =()=>{
               setsalary(salary+1000)
            }

     return(
        <>
        <p>Usecallbackexample</p>
        <UsecallbackHeading title={"heading component one ..."}/>
        <h3>salary</h3>
        <UsecallbackHeading title={"heading component two ..."}/>
        <h3>{salary}</h3>
        <button onClick={salincrement}>increment salary</button>
        <Todoviewer todo={todo} addtodosfun={addtodos}/>
        </>
     )
}

export default UseCallBackExample