const Child=(prop)=>{
    console.log(prop.name)
    return(
        <>
         <h2>This is Child</h2>
         <h1>{prop.name}h1</h1>
        </>
    )

}
export default Child