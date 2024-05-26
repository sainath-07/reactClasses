import { memo } from "react"

const Child =({demo})=>{
    console.log("Child component....")
    return(
        <>
        <h1>Child component</h1>
        <button onClick={demo}>demo fun</button>
        </>
    )
}
// export default Child
export default memo(Child)