import axios from "axios";
import React, { Component } from "react";

class Demo extends Component {
    state={
        products : []
    }

    componentDidMount(){
        this.fetchapi()
    }

    fetchapi=async()=>{
        let response=await axios.get('https://dummyjson.com/products')
        if(response.status===200){
            this.setState({
                products : response.data.products

            })
        }
        else{
            alert("Network error...")
        }
           console.log(response.data.products)
    }

    render(){
        return(
            <>
            {
                this.state.products.map((each,index)=>{
                    const {description,category}=each
                    return(
                        <>
                        <h1>{description}</h1>
                        <h1>{category}</h1>
                        <hr />
                        </>
                    )
                })
            }
            </>
        )
    }
}

export default Demo;
