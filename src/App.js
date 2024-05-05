
import Propcomponent from "./ReactCourse/Propdestructing/prop"




const Ui = () => {

  let object={
    name : "sainath",
    age : 23,
    address   : "Karwan",
    state : "Hyderabad",
    profession : null
  }

 return(
   <Propcomponent {...object} />
  )
}

export default Ui
