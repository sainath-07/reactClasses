
const ChildState=({children,press,text})=>{

    return(
        <>
        <button onClick={press}>{children}</button>
       <h1>{text}</h1>
        </> 
    )

}

export default ChildState