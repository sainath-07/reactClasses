import React from "react"

const Pages=({products,pagehandler})=>{

     let pagenumber=[]

     for(let i=1;i<Math.ceil(products.length/5)+1;i++){
        // console.log(i)
        pagenumber.push(i)
     }
     return(
        <div className="d-flex flex-wrap justify-content-center mt-3">
        {
            pagenumber.map((eachnum,i)=>{
                return(
                    <React.Fragment key={i}>
                    <button  style={{width:"5%",} } onClick={()=>pagehandler(eachnum)}>{eachnum}</button>
                   
                    </React.Fragment>
                )
            })
        }
        </div>
     )
}

export default Pages;