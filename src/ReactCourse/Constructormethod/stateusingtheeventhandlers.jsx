import { Component } from "react";

class Demo extends Component {
  constructor() {
    super();

    this.state = {
      count: 55,
      name: "sainath",
    };
    this.updateprice = this.updateprice.bind(this);
    // error message : Cann't read the properties of undefined.
  }

  render() {
    return (
      <>
        <p>price :{this.state.count}</p>
        <input type="text" id="input" />
        <button onClick={this.updateprice}>Click </button>
      </>
    );
  }

  updateprice() {
    let p = document.getElementById("input").value;

    this.setState({
      count: p,
    });
  }
}

export default Demo;
