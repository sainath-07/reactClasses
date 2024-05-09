import { useState } from "react";

const Todolist=()=>{

   const[array,updatearray]=useState(["Apple","grapes"])


   const addlist=()=>{
        updatearray([...array,"oranges"])
   }

   const clearall=()=>{
        
       updatearray([])
   }

   const deletelist=(match)=>{
        const filterlist=array.filter((each,index)=>index!=match)

        updatearray(filterlist)
   }

   const updatelist=(match)=>{
      const updatefilter=array.map((element,index)=>{
             if(index==match){
                return "updated"
             }
             else{
                return element
             }
      })

      updatearray(updatefilter)
   }
         return(
            <>

            <button onClick={addlist}>Add list</button>
            <button onClick={clearall}>Clear list</button>
            {
                array.map((eacharr,index)=>{

                    return(
                        <>
                        <h3>{index+". "+eacharr}</h3>
                        <button onClick={()=>deletelist(index)}>delete</button>
                        <button onClick={()=>updatelist(index)}>update</button>
                        </>
                    )
                })
            }
            </>
         )
}

export default Todolist;