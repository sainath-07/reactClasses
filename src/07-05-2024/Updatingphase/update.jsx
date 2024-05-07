import { Component } from "react";
import axios from "axios";

class Updatelifecycle extends Component {
  state = {
    count: 1,
    color: "green",
    products: null,
  };

  handleuseraction = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  static getDerivedStateFromProps(props) {
    return {
      color: props.color,
    };
  }



  componentDidMount() {
    document.title = `count ${this.state.count}`;
    axios.get(`https://fakestoreapi.com/products/${this.state.count}`)
      .then((result) => {
        if (result.status === 200) {
          this.setState({
            products: result.data,
          });
     
        }
      });
  }

  componentDidUpdate() {
    document.title = `count ${this.state.count}`;
    // axios.get(`https://fakestoreapi.com/products/${this.state.count}`)
    //   .then((result) => {
    //     if (result.status === 200) {
    //       this.setState({
    //         products: result.data,
    //       });
  
    //     }
    //   });
  }

  shouldComponentUpdate(){
    // if shouldcomponent return true then it will allow to update the data
    // if shouldcomponent return false then it will not allow to update the data

    return true
  }


  getSnapshotBeforeUpdate(state,props){

      console.log(props,"getSnapshotBeforeUpdate")
      return null
  }

  render() {
    return (
      <>
        <h1
          style={{
            color: this.state.color,
          }}
        >
          count : {this.state.count}
        </h1>
        <button onClick={this.handleuseraction}>Click</button>
        
        {/* error */}
        {/* <h1>{this.state.products.title}</h1> */}
        

         
        {
            this.state.products
            ?
            <>
            <h1>{this.state.products.title}</h1>
            <div>

            <img src={this.state.products.image} height={"100px"} alt="" />
            </div>
            </>
            :
            null
        }
      </>
    );
  }
}

export default Updatelifecycle;
