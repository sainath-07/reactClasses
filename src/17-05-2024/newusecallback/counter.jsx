import { memo } from "react"

const Counter=({count,handlecount})=>{
     console.log("Counter ......")
    return(
        <>
        <h1>{count}</h1>
        </>
    )
}

export default memo(Counter)