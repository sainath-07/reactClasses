import { Link, useNavigate } from "react-router-dom"

const InvalidScreen=()=>{
 
      const navigate=useNavigate()

      const clicktonavigate=()=>{
        const click=true
        if(click){

            navigate('/')
        }
      }
    return(
        <>
         <h1>Invalid screen</h1>
         {/* <button> <Link to={"/"}>Back to Homepage</Link></button> */}

         <button onClick={clicktonavigate}>Back to homepage</button>
        </>
    )
}
export default InvalidScreen