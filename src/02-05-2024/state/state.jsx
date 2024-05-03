import { Component } from "react";

class StateCounter extends Component {
  // object way of state creation.
  state = {
    count: 0,
    // subscribetext: "Subscribe",
    issubscribe: false,
  };

  Incrementmethod = (action) => {
    //   useraction function....

    switch (action) {
      case "Increment":
        this.setState({
          count: this.state.count+1,
        });

        break;

      case "Decrement":
        if (this.state.count > 0)
          this.setState({
            count: this.state.count-1,
          });
        break;

      case "Reset":
        this.setState({
          count: 0,
        });
        break;
    }
    // this.setState({1. parameter is object,mandotry },(2. callbackfunction optional)=>{})

    // this.setState(
    //     {
    //     count:this.state.count+1
    // },
    // ()=>{

    //     console.log("Incrementmethod inside the setstate: "+this.state.count)
    // }
    // )
    console.log("Incrementmethod : " + this.state.count);
  };

  subscribeaction=()=>{

    this.setState({
        // subscribetext:"Subscribed",
        issubscribe: !this.state.issubscribe
    })



  }

  render() {
    return (
      <>
        <button onClick={this.subscribeaction}
        
        style={{
            backgroundColor : this.state.issubscribe ? "green" : "red",
            borderRadius : "6px" 
        }}  
        
        >
            {


        this.state.issubscribe 
        ?
        "subscribed"  :
        "subscribe"
        }</button>

        {/* <button onClick={this.subscribeaction}>{
            if(this.state.issubscribe)
                subscribetext: "subscribed",
            
            else
                subscribetext: "subscribe",
            

        }</button> */}
       

        {this.state.issubscribe && (
          <>
            <h2>{this.state.count}</h2>
            <button onClick={() => this.Incrementmethod("Increment")}>
              Increment
            </button>

            <button onClick={() => this.Incrementmethod("Decrement")}>
              Decrement
            </button>
            <button onClick={() => this.Incrementmethod("Reset")}>Reset</button>
          </>
        )}
      </>
    );
  }
}

export default StateCounter;
