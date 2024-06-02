import { useState } from "react"

const Demo=()=>{
    const [name,setname]=useState("")

    const handlename=(event)=>{
        const res=event.target.value
        console.log(res)
        setname(res)

    }

    return(
        <>
        <input type="text" value={name} onChange={handlename} />
        </>
    )
}

export default Demo