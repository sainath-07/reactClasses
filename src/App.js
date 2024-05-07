import { Component } from "react"
import Updatelifecycle from "./07-05-2024/Updatingphase/update"



class Ui extends Component {

  state={
    color : "red"
  }
  
  changecolor=()=>{
    this.setState({
      color:"grey"
    })
  }

  render() {

    return (
      <>
        <Updatelifecycle color={this.state.color} />
         <button onClick={this.changecolor}>change color</button>
      </>

    )
  }
}

export default Ui
