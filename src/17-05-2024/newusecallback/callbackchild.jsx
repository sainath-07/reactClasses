import React, { memo } from "react"

const CallbackChild=({add,handleadd})=>{

    console.log("Child component......")
    return(
        <>
        <button onClick={handleadd}>child click</button>
        <h1>child component</h1>
        {
            add.map((eachobj,index)=>{
                return(
                    <React.Fragment key={index}>
                    <h1>{eachobj}</h1>
                    </React.Fragment>
                )
            })
        }

        </>
    )
}

export default memo(CallbackChild)