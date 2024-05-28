import axios from "axios";
import React, { Component } from "react";

class ComponentDidUpdate extends Component {
  constructor() {
    super();
    this.state = {
      message: "hello good morning...😊",
      data : [],
      dummydata:[],
      color: "green",
      count : 1,
      obj : {}
    };
  }

  componentDidMount() {
    // To perfrom the side effects

      this.fetchapi()
      this.fetchap()
  }

  fetchapi=async()=>{
       let response=await axios.get(`https://dummyjson.com/products/${this.state.count}`)

       this.setState({
         data : response.data.products
       })
       console.log(response.data)


  }
  fetchap=async()=>{
       let response=await axios.get(`https://dummyjson.com/products`)

       this.setState({
        dummydata : response.data.products
       })
       console.log(response.data)


  }
  fetchapi=async()=>{
       let response=await axios.get(`https://dummyjson.com/products/${this.state.count}`)

       this.setState({
         data : response.data.products
       })
       console.log(response.data)


  }

  componentDidUpdate(prop,state) {
    // To render the udpates of side effects in the browser

    if (state.count !== this.state.count) {
        // this.fetchApi();
        axios.get(`https://dummyjson.com/products/${this.state.count}`)
        .then((res)=>{
           console.log(res)
           this.setState({
               obj : res.data
           }) 
        })
      }


  }


  static getDerivedStateFromProps(props,state) {

    // It changes the state based on the prop over the time..
    console.log("Getderivedstatefromprop",props)
        return {
            color : props.color
        }
        
  }
 

   shouldComponentUpdate(){
    return true
   }
  useraction=()=>{
    this.setState({
        count : this.state.count+1
    })
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

        <h1>{this.state.count}</h1>
        
        <button onClick={this.useraction}>Increase count </button>


        <h1>{this.state.obj.title} </h1>

        {/* {
            this.state.dummydata.map((each,index)=>{
                return(
                    <React.Fragment>
                     <button>{each.id}</button>
                    </React.Fragment>
                )
            })
        } */}
      </>
    );
  }
}

export default ComponentDidUpdate;
