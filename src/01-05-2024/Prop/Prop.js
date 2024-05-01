const ButtonProp=(props)=>{
    console.log(props,"props")

    // destructring 

    const {text,bgColor,buttonproperties:{width,height}}= props
    return(
        <>
        <button style={{
            backgroundColor:bgColor,
            width : width,
            height : height
        }} >{text}</button>
        </> 
    )
}



export default ButtonProp  