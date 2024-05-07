import axios from "axios";
import { Component } from "react";
import ProductsList from "./Productlist";
import "./task.css";
import { Circles } from "react-loader-spinner";
import Spinner from "../Fetchwithclasscomponent/spinner";

class Task extends Component {
  state = {
    products: [],
    dummyproducts: [],
 
  };

  componentDidMount() {
    this.fetchdata();
  }

  fetchdata = async () => {
    const result = await axios.get("https://fakestoreapi.com/products/");
    this.setState({
      products: result.data,
      dummyproducts: result.data,
      all: result,
    });
    console.log(result.data);
    // console.log(result);
  };

  useraction = (catitem) => {
    const updateitems = this.state.dummyproducts.filter((ele) => {
      return ele.category == catitem;
    });
    this.setState({
      products: updateitems,
    });
  };

  allproducts = () => {
    const updateitems = this.state.dummyproducts.map((ele) => {
      return ele;
    });
    this.setState({
      products: updateitems,
    });
  };

  render() {
    return (
      <div>
        <div className="header mt-4  d-flex justify-content-center  bg-danger rounded  mx-5 py-2 gap-4 ">
          <button
            className="button bg-warning  rounded p-2 fs-5"
            onClick={() => this.useraction("women's clothing")}
          >
            women's clothing
          </button>
          <button
            className="button bg-warning  rounded p-2 fs-5"
            onClick={() => this.useraction("jewelery")}
          >
            jewelery
          </button>
          <button
            className="button bg-warning  rounded p-2 fs-5"
            onClick={() => this.useraction("electronics")}
          >
            electronics
          </button>
          <button
            className="button bg-warning  rounded p-2 fs-5"
            onClick={() => this.useraction("men's clothing")}
          >
            men's clothing
          </button>
          <button
            className="button bg-warning  rounded p-2 fs-5"
            onClick={() => this.allproducts(this.state.products)}
          >
            All categories
          </button>
        </div>

        <div className="d-flex mt-5 justify-content-center gap-4 flex-wrap">

          {
            this.state.products.length>0
            ?
            <>
          {this.state.products.map((eachobject, index) => {
            return <ProductsList list={eachobject} key={index} />;
          })}
            </>
            :
            <Spinner/>
          }
        </div>
      </div>
    );
  }
}

export default Task;
