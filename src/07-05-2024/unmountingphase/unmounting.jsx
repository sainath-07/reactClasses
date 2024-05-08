import { Component } from "react";

class Unmounting extends Component{

    state={
        ischildvisible : true
    }
    render(){
        return(
            <>
            <h1>Unmounting</h1>

            {
                this.state.ischildvisible 
                ?
                <>

                 <Child/>
                </>
                :
            <h1>No child component found </h1>

            }
            <div>

            <button onClick={this.hide}>
                {
         this.state.ischildvisible  ? "Hide Child component" : "click to view"

                }
            </button>
            </div>
            </>
        )
    }

    hide=()=>{
        this.setState({
            ischildvisible:!this.state.ischildvisible
        })
    }
}
export default Unmounting

class Child extends Component{

    componentWillUnmount(){
        console.log("componentDidMount")
    }
    render(){
        return(
            <>
            <h1>child visible</h1>
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"  height={"100px"} alt="" />
            </>
        )
    }
}