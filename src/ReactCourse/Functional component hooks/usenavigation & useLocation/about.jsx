import {useLocation} from 'react-router-dom'

const About=()=>{
    const location=useLocation()
    console.log(location.state)
     return(
        <>
         <h1>about page</h1>
         <h1>{location.state.id}</h1>
        </>
     )

}
export default About