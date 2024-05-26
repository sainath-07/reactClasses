import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomeScreen from "../screens/home-screen"
import AboutScreen from "../screens/about-screen"
import SettingScreen from "../screens/setting-screen"
import BlogScreen from "../screens/blog-screen"
import InvalidScreen from "../screens/invalid-screen"
import Eachproductdetails from "../screens/prodcutdetails"
import { createContext, useReducer, useState } from "react"
import Customhookscreen from "../screens/customhookscreen"
import Usecallbackexample from "../screens/usecallbackscreen"
import Addtocart from "../screens/addtocard"



export const passdata=createContext()
export const  passtheme=createContext()



const initialvalue={
    count :0,
    designation: "",
    name : "veda",
    subject : ["Angular"," React"],
    

}


// To use globally we have to use the reducerfun outside the component.

// reducerfun will accept the two parameters 1. state 2. action
const reducerfun=(state,action)=>{
//    action means dispatch value , which is object 
// action={
//     type : "INCREMENT_ACTION"
// }

   switch(action.type){
      case "INCREMENT_ACTION" :
        console.log(state)
         return {...state,count:state.count+1}
         
      case "DECREMENT_ACTION" :
        if(state.count>0)
         return {...state,count:state.count-1}

      case "CHANGE_NAME" :
         return {...state,name:"sainath"}
      case "CHANGE_SUBJECT" :
         return {...state,subject:[...state.subject," Vue.js",action.payload]}
      default :
      return state
   }
}





//----------> Component
const NavigationScreen=()=>{

    const[theme,settheme]=useState(false)
    const [card,setcard]=useState([])
   const [currentstate,dispatch]=useReducer(reducerfun,initialvalue)

   const [count,setcount]=useState(0)


   const cardhandler=(obj)=>{
         setcard([...card,obj])
        

   }
     
     const incrementdispatch=()=>{
        dispatch({
            type : "INCREMENT_ACTION"
        })
     }
     const decrementdispatch=()=>{
        dispatch({
            type : "DECREMENT_ACTION"
        })
     }
     const changesubject=(subject)=>{
        dispatch({
            type : "CHANGE_SUBJECT",
            payload : subject
        })
     }
     const changename=()=>{
        dispatch({
            type : "CHANGE_NAME"
        })
     }


    
    
    const handledarkandlightmodes=()=>{
        settheme(!theme)
    }
    

    const incrementcount=()=>{
        setcount(count+1)
    }



 

    return(
        <>
        <passtheme.Provider value={{
            theme,
            handledarkandlightmodes,
            incrementcount,
            count,
            incrementdispatch,
            decrementdispatch,
            changename,
            changesubject,
            cardhandler,
            card,
            setcard,
            currentstate,
        }}>
        
    
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomeScreen} />
             <Route path="/about"  Component={AboutScreen}/> 
             <Route path="/setting"  Component={SettingScreen}/> 
             <Route path="/blog"  Component={BlogScreen}/> 
             <Route path="/usecallback"  Component={Usecallbackexample}/> 
             <Route path="/customhook"  Component={Customhookscreen}/> 
             <Route path="/Addtocart"  Component={Addtocart}/> 
             <Route path="/:brand/:productsID" Component={Eachproductdetails}></Route>
             <Route path="*"  Component={InvalidScreen}/> 
        </Routes>
        </BrowserRouter>
       
        </passtheme.Provider>

        </>
    )

}
export default NavigationScreen