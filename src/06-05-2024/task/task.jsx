import { Component } from "react";
import axios from "axios";
import ProductsList from "./Productlist";
import Spinner from "../Fetchwithclasscomponent/spinner";
import "./task.css";
class Task extends Component {
  state = {
    products: [],
    dummyproducts: [],
    categories: [],
    // loading: false,
  };

  componentDidMount() {
    this.eachcategories();
    this.useraction();
    this.allcategories();
  }

  // buttons
  eachcategories = async () => {
    let categoriesdata = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    this.setState({
      categories: categoriesdata.data,
    });
  };

  // initalising the data to dummyproducts and products
  useraction = async () => {
    let cards = await axios.get(`https://fakestoreapi.com/products`);
    this.setState({
      dummyproducts: cards.data,
      products: cards.data,
    });
  };

  allcategories = async () => {
    let cards = await axios.get(`https://fakestoreapi.com/products`);
    this.setState({
      dummyproducts: cards.data,
      products: cards.data,
      loading: true,
    });
  };

  userdata = async (select) => {
    this.setState({
      products: this.state.dummyproducts,
      // loading: false,
    });

    const filterdata = this.state.dummyproducts.filter(
      (eachcategiores) => eachcategiores.category == select
    );
    this.setState({
      products: filterdata,
      // loading: true,
    });
  };

  render() {
    return (
      <>
        <div className="mt-4  d-flex justify-content-center  bg-danger rounded  mx-5 py-2 gap-4">
          {this.state.categories.map((each, index) => {
            return (
              <>
                {this.state.products.length>0 ? (
                  <>
                    <button
                      className="button bg-warning  rounded py-2"
                      onClick={() => this.userdata(each)}
                    >
                      {each}
                    </button>
                  </>
                ) : (
                  // <Spinner />
                  null
                )}
              </>
            );
          })}
          <button
            className="button bg-warning rounded py-2"
            onClick={this.allcategories}
          >
            All categories
          </button>
        </div>

        <div className="d-flex mt-5 justify-content-center gap-4 flex-wrap">
          {this.state.products.length > 0 ? (
            <>
              {this.state.products.map((eachobject, index) => {
                return <ProductsList list={eachobject} key={index} />;
              })}
            </>
          ) : (
            <Spinner />
          )}
        </div>
      </>
    );
  }
}
export default Task;
