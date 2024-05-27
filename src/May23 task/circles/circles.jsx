import React, { useState } from "react";
import { Circles } from "react-loader-spinner";

const CriclesTask = () => {
  const [count, setcount] = useState(1);
  const [checkcolorcount, setcheckcolorcount] = useState(0);
  const [initialvalue, setinitialvalue] = useState(null);
  const [content, setcontent] = useState([`${count}`]);

  const addcricles = () => {
    setinitialvalue(true);
    setcount(count + 1);
    setcontent([...content, `${count}`]);
  };

  const [color, setcolor] = useState(false);

  const colorchange = (match) => {
    setcheckcolorcount(checkcolorcount + 1);
    const filterdata = content.filter((each, index) => index === match);
    setcolor(filterdata);
  };

  console.log(content);

  return (
    <>
      <h1 className="text-center">CriclesTask</h1>

      <h5>total colored count :{checkcolorcount}</h5>

      <button onClick={addcricles}>Click to add cricles</button>

      {initialvalue &&
        content.map((eachitem, index) => {
          return (
            <React.Fragment key={index}>
              {index >= 1 && (
                <h1
                  className="border border-primary"
                  
                  style={{
                    color: `${color == eachitem && "red"}`,
                    // backgroundColor: `${color == eachitem && "black"}`,
                  }}
                >
                 
                  <Cricle onClick={() => colorchange(index)} eachitem={eachitem} />
                </h1>
              )}
            </React.Fragment>
          );
        })}
    </>
  );
};


const Cricle=({onClick,eachitem,color})=>{
  return(
    <div style={{
      borderRadius:"50px",
      border:"2px solid black",
      height:"75px",
      width:"75px",
      backgroundColor: `${color == eachitem && "red"}`,
    }}  
    onClick={onClick}></div>
  )
}

export default CriclesTask;
