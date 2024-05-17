import axios from "axios";
import React, { useEffect, useState } from "react";
import Eachprod from "./eachproduct";

const Useeffecttask = () => {
  const [eachbtn, seteachbtn] = useState([]);
  const [realdata, setrealdata] = useState([]);
  const [dummydata, setdummydata] = useState([]);

  useEffect(() => {
    fetchapi();
  }, []);

  // fetching the api data
  const fetchapi = async () => {
    let response = await axios.get(`https://fakestoreapi.com/products`);
    console.log(response.data);
    if (response.status === 200) {
      seteachbtn(response.data);
      setdummydata(response.data);
      setrealdata(response.data);
    }
  };

  const displayeachproduct = (match) => {
    setrealdata(dummydata);

    const filtereachproduct = dummydata.filter(
      (eachlist) => eachlist.id == match
    );

    setrealdata(filtereachproduct);
    console.log(realdata);
  };

  return (
    <>
  
    <div className='d-flex flex-wrap justify-content-center mt-5'>
      {eachbtn.map((eachitem, index) => {
        const { id, title, image, category } = eachitem;
        return (
          <React.Fragment key={index} >
            <button onClick={() => displayeachproduct(id)}
            style={{
                width:"4%",
                backgroundColor:"black",
                color:"white",
                outline: "none"
            }}
            
            >{id}</button>
          </React.Fragment>
        );
      })}
      </div>      
      <div className="d-flex flex-wrap justify-content-center mt-5">
      {
        realdata.map((eachproductdata,index)=>{
            const {id}=eachproductdata
          return(
            <React.Fragment key={id}>
               <Eachprod products={eachproductdata}/>
            </React.Fragment>
          )
        })
      }
                   </div>
    </>
  );
};
export default Useeffecttask;
