import { useContext } from "react"
import Navbar from "../Navbar/navbar"
import { passtheme } from "../Navigationscreen/navigation"


const AboutScreen=()=>{
          const{currentstate,incrementdispatch,decrementdispatch,changename,changesubject

          }=useContext(passtheme)
    const changereducercount=()=>{
        incrementdispatch()
    }



    return(
        <>
            <Navbar/>
        <h1> AboutScreen</h1>
        <h1>Usereducer count :  {currentstate.count}</h1>
        <button onClick={changereducercount}>usereducercountbtn++</button>

        <button onClick={decrementdispatch}>usereducercountbtn--</button>
    <hr />
        <h2>current state.name</h2>
        <h1>{currentstate.name}</h1>


 
        <button onClick={changename}> changename</button>


              <hr />

              <input type="text" onKeyDown={(e)=>changesubject(e.target.value)}
              
              /> <br />


            <button onClick={()=>changesubject("Three JS")}>add subject</button>
      <h5>
        <ol>
            
           {
             currentstate.subject.map((eachsubj,i)=>{
                    return(


                        <li key={i}>{eachsubj}</li>
                    )
             } 
             )
           }

            
        </ol>
        </h5>

        </>
    )

}
export default AboutScreen