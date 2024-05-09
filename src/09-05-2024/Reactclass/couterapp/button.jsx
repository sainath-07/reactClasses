const Button=(prop)=>{
    const {children,action}=prop
     return(
        <>
         <button style={{backgroundColor:"black",color:"white"}} onClick={action}>{children}</button>
        </>
     )
}
export default Button