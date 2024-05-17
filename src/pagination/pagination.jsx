import axios from "axios";
import React, { useEffect, useState } from "react";
import Pages from "./pages";

const Pagination = () => {
  const [products, setproducts] = useState([]);
  const [perpageproducts, setperpageproducts] = useState([]);

  useEffect(() => {
    fetchapicall();
  }, []);

  const fetchapicall = async () => {
    let reponse = await axios.get("https://dummyjson.com/products");

    if (reponse.status === 200) {
      //   console.log(reponse);
      console.log(reponse.data.products);
      setproducts(reponse.data.products);
      setperpageproducts(reponse.data.products.slice(0, 5));
    } else {
      alert(reponse.status);
    }
  };

  const pagehandler = (pagenumber) => {
    setperpageproducts(products.slice(pagenumber * 5 - 5, pagenumber * 5));
    // console.log(perpageproducts.slice(0,pagenumber*10))
  };

  return (
    <>
      {/* <h1>Pagination</h1> */}
      <div className="d-flex flex-wrap justify-content-center">
        {perpageproducts.map((eachproduct, i) => {
          const { price, thumbnail,brand} = eachproduct;
          return (
            <div key={i} className="border rounded bg-dark mt-2 mx-4 mb-1">

              <img src={thumbnail} width={"280px"} height={"260px"}alt="" />
              <p className="text-center text-white " >brand : <span className="fs-5">{brand}</span> </p>

            </div>
          );
        })}
      </div>
      <Pages products={products} pagehandler={pagehandler} />
    </>
  );
};

export default Pagination;
