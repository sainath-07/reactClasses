import { useRef } from "react";
import "./useRef2.css"

const UseRef2 = () => {
  let headings = useRef([]);
  console.log(headings)


  const changecolor=(e)=>{

      for(let each of headings.current){
         each.classList.remove('primary')
        }
        e.target.classList.add('primary')
        console.log(e.target)
        console.log(e)
    }

  return (
    <>
      <h1 ref={(currentele) => (headings.current[0] = currentele)}
       
       onClick={(addclass)=>{
         changecolor(addclass)
       }}
      
      >
        Heading 0
      </h1>
      <h1 ref={(currentele) => (headings.current[1] = currentele)}
       
       onClick={(addclass)=>{
         changecolor(addclass)
       }}
      
      >
        Heading 1
      </h1>
      <h1 ref={(currentele) => (headings.current[2] = currentele)}
       
       onClick={(addclass)=>{
         changecolor(addclass)
       }}
      
      >
        Heading 2
      </h1>
    
      
    </>
  );
};
export default UseRef2;
