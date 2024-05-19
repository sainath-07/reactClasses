import { createContext } from "react";
import Main from "./ReactCourse/Functional component hooks/useCreateContext/main copy"
import Demo from "./ReactCourse/Functional component hooks/useCreateContext/demo";
export const obj = createContext()

const Render = () => {
   
   console.log(obj)

   const p = {
      name: "context-provider"
   }

   return (
      <>
         <obj.Provider value={p}>
            {/* for this value prop we can pass any datatype */}

            <Main />

            <Demo/>
         </obj.Provider>

         {/* here provider is the method and obj is the object , here the createcontext assigned variable name should be used as variablename.provider */}

      </>
   )
}

export default Render;
