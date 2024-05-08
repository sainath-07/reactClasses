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
            <button
                   onClick={()=>{
                    let p = document.getElementById("input").value

                    this.setState({
                        name : p,
                        
                    },()=>{
                        console.log(this.state)
                    })

                     
                   }}

            >Click </button>
            
            </>
        )
       }
}

// export default Demo;