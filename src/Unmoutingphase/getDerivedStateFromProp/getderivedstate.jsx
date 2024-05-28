import axios from "axios";
import React, { Component } from "react";

class Getderivedstatefromprop extends Component {
  constructor() {
    super();
    this.state = {
      message: "hello good morning...😊",
      data : [],
      color: "green"
    };
  }

  componentDidMount() {
    // To perfrom the side effects

      this.fetchapi()
  }

  fetchapi=async()=>{
       let response=await axios.get('https://dummyjson.com/products')

       this.setState({
         data : response.data.products
       })
       console.log(response.data.products)


  }

  static getDerivedStateFromProps(props,state) {

    // It changes the state based on the prop over the time..
    console.log("Getderivedstatefromprop",props)
        return {
            color : props.color
        }
        
  }
  componentDidUpdate() {
    // To render the udpates of side effects in the browser
  }


  render() {
    return (
      <>
 
        <h1 
         style={{
            color : this.state.color
         }}
        >
          {this.state.message}
        </h1>

        {
           this.state.data.map((each,i)=>{
                return(
                    <React.Fragment key={i}>
                        <p>{each.title}</p>
                    </React.Fragment>
                )
            })
        }
      </>
    );
  }
}

export default Getderivedstatefromprop;
