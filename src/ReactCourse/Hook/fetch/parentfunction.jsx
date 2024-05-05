import React from "react"
import "./Parentfunctionstyling.css"

const ParentComponent=({price,image,category,rating:{rate,count}})=>{
    return(
       <div className="st">
            <div className="border border-light">
                  <img src={image}  width={222} height={228} alt="" />
            </div>
                  <h4 className="text-center">{category}</h4>
                  <p className="text-center fs-5"> Price : {price}</p>
                  <span className="text-center fs-5 ms-3 border"> rate : {rate}</span>
                  <span className="text-center fs-5 ms-2 border"> count : {count}</span>
                

       </div>
    )

}
export default ParentComponent