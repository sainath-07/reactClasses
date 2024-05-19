import { useContext } from "react"
import { obj } from "../../../App"

const Demo=()=>{
    const print=useContext(obj)
      return(
        <>
        <hr />
        <h1>Demo page </h1>
         <h1>{print.name}</h1>
        </>
      )
}
export default Demo