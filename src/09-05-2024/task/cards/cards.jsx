import React, { useState } from "react";
import Child from "./child";

const Cardslist=()=>{

     const [array,updatearray]=useState([
        {
            id : 1,
            url : "https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text : "Parrot",
            type : "Bird"
            
        },
        {
            id : 2,
            url : "https://images.unsplash.com/photo-1576380605127-46eb6de2392d?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text : "Blue jay",
            type : "Bird"
        },
        {
            id : 3,
            url : "https://images.unsplash.com/photo-1553264701-d138db4fd5d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text : "Owl",
            type : "Bird"
        },
        {
            id : 4,
            url : "https://images.unsplash.com/photo-1658663072432-b1f76adf30af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text : "Bat",
            type : "Mammals"
        },
        {
            id : 5,
            url : "https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text : "Bears",
            type : "Mammals"
        },
        {
            id : 6,
            url : "https://images.unsplash.com/photo-1518770352423-dce09a3d3307?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text : "squirrels",
            type : "Mammals"
        },
     ])
    return(
        <>
        <div className="d-flex justify-content-center flex-wrap">
        {
            array.map((eachobject)=>{
                const {id}=eachobject
                return(
                    <React.Fragment key={id}>

                        <Child prop={eachobject}/>
                    </React.Fragment>
                )
            })
        }
        </div>
        </>
    )
}
export default Cardslist;