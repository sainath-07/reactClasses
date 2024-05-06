import Listitem from "./listitems";
import Spinner from "./spinner";
import axios from "axios";

const { Component } = require("react");

class Fetchwithclass extends Component {
  constructor() {
    console.log("constructor");
    super();

    this.state = {
      message: "Good",
      color : "green",
      products: [],
    };
  }

  componentDidMount() {
    //side effects like : fetching data, timer, data modifications

    console.log("component did mount",document);

    //   1.
    //    fetch('https://fakestoreapi.com/products/')
    //         .then(res=>res.json())
    //         .then(result=>{
    //             this.setState({
    //                 products:result

    //             })
    //             // console.log(result)

    // 2.
    // axios.get('https://fakestoreapi.com/products/')
    // .then((result)=>{
    //     if(result.status>=200 && result.status<=299){

    //         this.setState({
    //             products : result.data
    //         })
    //     }
    //     else{
    //         alert("response is null")
    //     }
    // })
    this.fetchdata();
   
    // Dom manipulation .......
    document.title=this.state.message
  }

  // 3.
  fetchdata = async () => {
    const result = await axios.get("https://fakestoreapi.com/products/");
    if (result.status === 200) {
      this.setState({
        products: result.data,
      });
    } else {
      alert("error");
    }
  };

  static getDerivedStateFromProps({color}) {
    // it changes the state based on the prop over the time.
    console.log("getDerivedStateFromProps");
    return {
        color : color
    };
  }

  render() {
    return (
      <> 
      <h1 style={{color:this.state.color}}>Fake store Api list item</h1>
        {this.state.products.length > 0 ? (
          <div className="d-flex flex-wrap justify-content-center mt-5 gap-5 ">
            {this.state.products.map((eachobj, index) => {
              return <Listitem pro={eachobj} key={index} />;
            })}
          </div>
        ) : (
          <Spinner />
        )}
      </>
    );
  }
}

export default Fetchwithclass;
