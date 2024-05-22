import { useContext } from "react"
import Navbar from "../Navbar/navbar"
import { passtheme } from "../Navigationscreen/navigation"



const SettingScreen=()=>{

            const{incrementcount}=useContext(passtheme)
    const increment=()=>{
        incrementcount()
    }
    return(
        <>
            <Navbar/>
        <h1> SettingScreen</h1>
        <button onClick={increment}>increment</button>
        </>
    )

}
export default SettingScreen