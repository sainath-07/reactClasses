import React from "react"
import useAxios from "./useAxios"

const Displaydata=()=>{

    const [products,apicall,errormesasge]=useAxios()

    return(
        <>
         {
            products.map((each,i)=>{
                const{thumbnail,title}=each
                return(
                    <React.Fragment key={i}>
                        <div className="border border-danger w-50">
                        <p>{title}</p>
                        <img src={thumbnail} width={"100"} alt="" />
                        </div>
                    </React.Fragment>
                )
            })
         }
        </>
    )

}

export default Displaydata