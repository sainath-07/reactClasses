import Products from "./products"

const Main=({name})=>{
    // console.log(name)
    return(
       <>
       <h1>Main page</h1>
       <Products name={name}/>
       </>
    )
}

export default Main