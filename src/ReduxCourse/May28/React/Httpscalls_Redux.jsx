import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../Products/Productsaction";

const HttpCalls_reudx = () => {
  const {
    products: { products, loading },
  } = useSelector((state) => state);

  // console.log(fetchcalls)
  const dispatch_httpcalls = useDispatch();

  useEffect(() => {
    dispatch_httpcalls(productsAction());
  }, []);

  return (
    <>
      <h1 className="text-center">HttpCalls</h1>
      <div className="d-flex flex-wrap gap-3 justify-content-center ">
        {loading
         ? 
         (
          <>
            <h1>data is loading</h1>
          </>
        ) 
        : 
        (
          <>
            {products.map((eachobj, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="border rounded">
                    <img src={eachobj.thumbnail} alt="" />
                    <p className="text-center">{eachobj.title}</p>
                  </div>
                </React.Fragment>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};
export default HttpCalls_reudx;
