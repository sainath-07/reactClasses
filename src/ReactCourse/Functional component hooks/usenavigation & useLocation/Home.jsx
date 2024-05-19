import React from "react"
import {useNavigate} from "react-router-dom"

const Home=()=>{
    const id=5;

    const navigation=useNavigate()

    const gotoabout=()=>{
         navigation("/about", {state:{id:id}} )
    }
    return(
        <>
        <div>Home</div>
        <button onClick={gotoabout}>About page</button>
        </>
    )

}

export default Home


// without using the props we can pass the data using the state 
// we have to use the useLocation hook , it return the object 