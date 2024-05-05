import { Component } from "react";

class Demo extends Component{
       state={
        count : 55,
        name : "sainath"
       }
         
       
       
       render(){
        return(
            <>
            <p>price :{this.state.count}</p>
            <input type="text" id="input" /> 
            <button onClick={this.updateprice}>Click </button>
            </>
        )
    }

    updateprice(){
       let p = document.getElementById("input").value
    
       this.setState({
           count : p
       })
    }


}

export default Demo;