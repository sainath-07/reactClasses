import { useState } from "react"

const RandomCricles=()=>{


    const[count,setCount]=useState(0)

    const [list,setlist]=useState([])

    const handleincrement=()=>{
        setCount(count+1)
        
    }

    return(
        <>
        <h1>RandomCricles</h1>
        <button onClick={handleincrement}>Increment</button>

      
        <div className="border border-dark border-2 mt-4" style={{
            borderRadius:"50%",
            width: "50px",
            height :"50px"

        }}>{list}{count}</div>
        </>
    )

}
export default RandomCricles
