import { Component } from "react";

class Unmouting extends Component{

    state={
        value : true
    }

    handleuser=()=>{
        this.setState({
            value :!this.state.value
        })

    }


    render(){
        return(
            <>
          <h1>Unmounting phase</h1>

          {
            this.state.value
            ?
            <Subchild/>

            :
            <h1>No child found</h1>

          }

          <div>
          <button onClick={this.handleuser} className="mt-4">{
            this.state.value
            ?
            "hide"
            :
            "unhide"
          }</button>

          </div>
        </>
        )
    }
}

export default Unmouting

const Subchild=()=>{
    return(
        <>
        <h1>Subchild</h1>



        <img src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"  width={"100px"}  className="border border-danger" alt="" />
        </>
    )
}