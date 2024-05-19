import EachProduct from "./eachproduct"

const Products=({name})=>{
    // console.log(name)
    return(
       <>
       <hr />
       <h1>Product page</h1>
            <h1>{name}</h1>
       <EachProduct name={name}/>
       </>
    )
}

export default Products