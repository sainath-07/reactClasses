import axios from "axios";
import React, { Component } from "react";
import Eachcard from "./eachcard";
class EachButton extends Component {
  state = {
    btns: [],
    products: [],
    dummyproducts: [],
  };

  componentDidMount() {
    this.fetcheachid();
  }

  fetcheachid = async () => {
    let result = await axios.get(`https://fakestoreapi.com/products`);
    this.setState({
      btns: result.data,
      products: result.data,
      dummyproducts: result.data,
    });

    console.log(result);
  };

  useraction = (match) => {
    this.setState({
      products: this.state.dummyproducts,
    });

    const filterdata = this.state.dummyproducts.filter(
      (each) => each.id == match
    );

    this.setState({
      products: filterdata,
    });
  };

  render() {
    return (
      <>
        <div className="d-flex flex-wrap justify-content-center">
          {this.state.btns.map((each,index) => {
            const { id } = each;
            return (
              <React.Fragment key={index}>
                <button
                  style={{
                    width: "4%",
                    height: "45px",
                    marginTop: "20px",
                    border: "2px solid #222",
                    // outline : "none"
                    backgroundColor: "#fac301",
                  }}
                  onClick={() => this.useraction(id)}
                >
                  {id}
                </button>
              </React.Fragment >
            );
          })}
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {this.state.products.map((eachcard) => {
            const { id, title, price } = eachcard;
            return (
              <React.Fragment key={id}>
                <Eachcard items={eachcard} />
              </React.Fragment>
            );
          })}
        </div>
      </>
    );
  }
}

export default EachButton;
