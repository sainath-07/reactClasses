import axios from "axios"
import React, { useEffect, useState } from "react"

const Useeffecttask=()=>{
    const [eachdata,seteachdata]=useState([])

        useEffect(()=>{
            fetchapi()
        },[])


        // fetching the api data 
        const fetchapi=async()=>{
            let response = await axios.get(`https://fakestoreapi.com/products`)
            console.log(response.data)
            if(response.status===200){
                seteachdata(response.data)
            }
        }
  


    const displayeachproduct=(match)=>{
          
    }

    return(

         <>
         <h1>task</h1>

         {
           eachdata.map((eachitem,index)=>{
            const {id,title,image,category}=eachitem
               return(
                <React.Fragment key={index}>
                    <button onClick={()=>displayeachproduct(id)}>{id}</button>
                </React.Fragment>
               )
           })

         }
         </>
    )
}
export default Useeffecttask