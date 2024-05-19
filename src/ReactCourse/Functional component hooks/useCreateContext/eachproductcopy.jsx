import { useContext } from "react"
import { obj } from "../../../App"

const EachProduct=()=>{

   let print=useContext(obj)
     return(
        <>
        <h1>Each Product page</h1>
        <h4>{print.name}</h4>
        </>
     )
}

export default EachProduct