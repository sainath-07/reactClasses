
const ChildState=({children,press})=>{

    return(
        <>
        <button onClick={press}>{children}</button>
       {/* <h1>{text}</h1> */}
       {/* {
        text && <h2>{text}</h2>
       } */}
       <Text/>
        </> 
    )

}

 export const Text=({text})=>{
    return(
        <>
         <h1>{text}</h1>
        </>
    )
}


export default ChildState