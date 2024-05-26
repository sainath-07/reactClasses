import axios from "axios";
import { useEffect, useState } from "react"

const useAxios=()=>{
      const [list,setlist]=useState([])
      const [error,seterror]=useState(null)
      
      useEffect(()=>{
         fetchapi();
      },[])



    const fetchapi=async()=>{
        try{
        let response = await axios.get('https://dummyjson.com/products/')
        if(response.status===200){
            console.log(response.data.products)
            setlist(response.data.products)

        }
        }
        catch(err){
            seterror(err)
        }
    }

    return [list,fetchapi,error]
}

export default useAxios