import React from "react"

const UsecallbackHeading=({title})=>{
    console.log("usecallbackheading")
    return(
        <>
        <h1>{title}</h1>
        </>
    )
}

// export default UsecallbackHeading
export default React.memo(UsecallbackHeading) //HOC