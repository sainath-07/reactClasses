import React from "react";
import "./flexcards.css"

const Cards = (callProp) => {
  console.log(callProp);


  
  const { title, price, description, image, key } = callProp;
  return (
    <div
      className="card d-flex align-items-center h-20"
      style={{ width: "15rem" }}
    >
      <img src={image} width={"100px"} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
       
        <a href="#" className="btn btn-primary m-2">
          Add to Cart
        </a>
        <a href="#" className="btn btn-primary">
          {price}
        </a>
      </div>
    </div>



    // with destructing 
    // <div className="parent border border-dark bg-light rounded d-flex flex-column border-dark align-items-center">
    //     <img src={image} width={"130"} alt="image" />
    //     <div>

    //     <h5 className="card-title">{title}</h5>
    //     </div>
    //     <div><button>{price}</button></div>
    // </div>



    // without destructing..
    // <div className="parent border border-dark bg-light rounded d-flex flex-column border-dark align-items-center">
    //     <img src={callProp.image} width={"130"} alt="image" />
    //     <div>

    //     <h5 className="card-title">{callProp.title}</h5>
    //     </div>
    //     <div><button>{callProp.price}</button></div>
    // </div>
  );
};

export default Cards;
