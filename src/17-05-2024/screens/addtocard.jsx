import React, { useContext, useState } from "react";
import { passtheme } from "../Navigationscreen/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

const Addtocart = () => {
  const { card, setcard } = useContext(passtheme);
  console.log(card.length)

  const deleteproduct = (match) => {
    const filterdata = card.filter((eachprod, i) => i !== match)
    setcard(filterdata)
  }

  const useraction = (value, i) => {
    switch (value) {
      case 'INCREMENT_ACTION':
        const cardincrease = card.map((each, index) => {
          if (index === i) {
            each.count++
            let num = each.count * each.price
            each.totalprice = Math.round(num)
            return each
          } else {
            return each
          }
        })
        setcard(cardincrease)
        break

      case 'DECREMENT_ACTION':
        const cardreducecount = card.map((each, index) => {
          if (index === i) {
            if (each.count > 1) {
              each.count--
              let num = each.count * each.price
              each.totalprice = Math.round(num)
              return each
            } else {
              return each
            }
          } else {
            return each
          }
        })
        setcard(cardreducecount)
        break
    }
  }

  console.log(card)

  return (
    <div className="container mt-4">
      <h3 className="text-center">Add to cart page&#128722;</h3>
      {card.map((eachproduct, index) => {
        const { thumbnail, title, availabilityStatus, price, brand, category, totalprice, count } = eachproduct;
        return (
          <React.Fragment key={index}>
            <div className="row mb-4 p-3 border rounded shadow-sm bg-light">
              <div className="col-md-3 col-lg-2 mb-3 mb-md-0">
                <img src={thumbnail} className="img-fluid rounded" alt={title} />
              </div>
              <div className="col-md-9 col-lg-10">
                <div className="d-flex flex-column">
                  <p><strong>Availability Status:</strong> {availabilityStatus}</p>
                  <p><strong>Title:</strong> {title}</p>
                  <p><strong>Brand:</strong> {brand}</p>
                  <p><strong>Category:</strong> {category}</p>
                  <p><strong>Price:</strong> &#8377;{Math.round(price)}</p>
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3">Quantity: <span className="badge bg-secondary">{count}</span></div>
                    <div className="me-3">Total Price: <span className="badge bg-secondary">&#8377;{totalprice}</span></div>
                    <button className="btn btn-sm btn-outline-success me-2" onClick={() => useraction("INCREMENT_ACTION", index)}>+</button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => useraction("DECREMENT_ACTION", index)}>-</button>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="btn btn-danger" onClick={() => deleteproduct(index)}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default Addtocart;
