import { useContext } from "react"
import Navbar from "../Navbar/navbar"
import { passtheme } from "../Navigationscreen/navigation"



const SettingScreen=()=>{

            const{incrementcount,incrementdispatch}=useContext(passtheme)
    const usestateincrement=()=>{
        incrementcount()
    }


    const usereducerinrement=()=>{
        incrementdispatch()
    }


    return(
        <>
            <Navbar/>
        <h1> SettingScreen</h1>
        <button onClick={usestateincrement}>usestatecountbtn</button>
        <br />
        <button className="mt-4" onClick={usereducerinrement}>usereducercountbtn</button>
        </>
    )

}
export default SettingScreen