import React, { useState } from "react";
import Cricle from "../../30-04-2024/Reactspinners/spinner";
import { Circles } from "react-loader-spinner";

const CriclesTask = () => {
   const[count,setcount]=useState(1)
   const[checkcolorcount,setcheckcolorcount]=useState(0)
  const [initialvalue, setinitialvalue] = useState(null);
  const [content, setcontent] = useState([`${count}`]);
//   console.log(content)




  const addcricles = () => {
    setinitialvalue(true);
    setcount(count+1)
    // console.log(count," count ")
    setcontent([...content,`${count}`]);
    // setdupinitialvalue([...content, "two"]);
  };

  const [color, setcolor] = useState(false);
//   console.log(color ," color value ")

  const colorchange=(match)=>{
    setcheckcolorcount(checkcolorcount+1)
    const filterdata=content.filter((each,index)=>index===match)
    //  console.log(filterdata," filterdata")
    setcolor(filterdata)
}


console.log(content)

  return (
    <>
      <h1 className="text-center">CriclesTask</h1>

      <h5>total colored count :{checkcolorcount}</h5>

      <button onClick={addcricles}>Click to add cricles</button>

      {initialvalue &&
        content.map((eachitem,index) => {
          return (
            <React.Fragment key={index}>
                {/* <Cricle className="border border-success"/> */}

                {
                    index >=1 &&
                    <h1
                    className="border border-primary"
                   onClick={()=>colorchange(index)}
                    style={{
                    color:`${(color==eachitem) && "red"}`,
                    backgroundColor:`${(color==eachitem) && "black"}`
                    }}
                   >
                     {/* {eachitem} */}
                     <Circles />
                   </h1>
                }
             
            </React.Fragment>
          );
        })}
    </>
  );
};

export default CriclesTask;
