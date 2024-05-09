import axios from "axios";
import { Component } from "react";

class EachButton extends Component{

    state={
         eachitem: []
    }


    componentDidMount(){
         this.eachbtns()
    }

    eachbtns=async()=>{
          let btns= await axios.get('https://fakestoreapi.com/products')
          this.setState({
            eachitem : btns.data
          })
          console.log(btns.data)
    }
    render(){
        return(
            <>
            {
                this.state.eachitem.map((singleele,index)=>{
                    return(
                        <>

                        </>
                    )
                })
            }
            </>
        )
    }
}
export default EachButton;