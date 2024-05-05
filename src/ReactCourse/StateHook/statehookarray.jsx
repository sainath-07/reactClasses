import React, { useState } from "react";

const Statehookarray = () => {
  let [product, updateproduct] = useState([
    {
      productName: "Samsung A101",
      productPrice: 5500,
    },
    {
      productName: "vivo K55",
      productPrice: 6000,
    },
    {
      productName: "Realme k55",
      productPrice: 8000,
    },
    {
      productName: "Nokia 589",
      productPrice: 9000,
    },
  ]);

  return (
    <>
      {product.map((eachobject, index) => {
        const { productName, productPrice } = eachobject;
        return (
          <React.Fragment key={index}>
            <h1> product Name : {productName}</h1>
            <h1> product Price : {productPrice}</h1>
            <br />
            
          </React.Fragment>
        );
      })
      }
  
    </>
  );
};

export default Statehookarray;
