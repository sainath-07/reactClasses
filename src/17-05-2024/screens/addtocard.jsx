import React, { useContext, useState } from "react";
import { passtheme } from "../Navigationscreen/navigation";


const Addtocart = () => {


  const [cartcount,setcartcount]=useState(1)

  const { card,setcard } = useContext(passtheme);
  console.log(card.length)

  const deleteproduct=(match)=>{
    const filterdata=card.filter((eachprod,i)=>i!==match)
    setcard(filterdata)
  }


   const useraction=(value)=>{
       switch(value){
        case 'INCREMENT_ACTION':
          setcartcount(cartcount+1)
          break
        case 'RESET':
          setcartcount(0)
          break
        case 'DECREMENT_ACTION':
          if(cartcount>1) setcartcount(cartcount-1)
          break
       }
   }
  


   


  return (
    <div className="container d-flex mt-2 flex-column justify-content-center   border border-success">
      {card.map((eachproduct, index) => {
        const { thumbnail ,title,availabilityStatus,brand ,category} = eachproduct;
        return (
          <React.Fragment key={index}>
            <div className="row d-flex justify-content-center">
              <div className="col-2  border border-danger">
                <img src={thumbnail} width={"100%"} alt="" />
              </div>
              <div className="col-7 border d-flex flex-column border-dark">
                <p className="text-wrap">availabilityStatus : {availabilityStatus}</p>
                <p className="text-wrap">title : {title}</p>
                <p className="text-wrap">brand : {brand}</p>
                <p className="text-wrap">category : {category}</p>
                <div  className="d-flex justify-content-end">
                   <div className="border border-2 me-2 px-2">{cartcount}</div>
                  <button className="border border-2" onClick={()=>useraction("INCREMENT_ACTION",index)}>+</button>
                  {/* <button  className="border border-2" onClick={()=>useraction("RESET",index)}>0</button> */}
                  <button  className="border border-2" onClick={()=>useraction("DECREMENT_ACTION",index)}>-</button>
                </div>
                <button  className="w-25 mx-auto border border-none mb-2  text-white bg-danger" onClick={()=>deleteproduct(index)}>Remove</button>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default Addtocart;
