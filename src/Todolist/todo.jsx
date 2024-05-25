import React, { useState } from "react";

const Todolist = () => {
  const [text, settext] = useState("");
  const [list, setlist] = useState([]);
  const [duplist, setduplist] = useState([]);
  const [value, setvalue] = useState(null);

  const clearall = () => {
    setlist([]);
  };

  const addtask = () => {
    if (text != "" && text != false) {
      setlist([...list, text]);
      setduplist([...list, text]);
      setvalue(false);
      settext("");
    } else {
      setvalue(true);
    }
  };

  console.log(list);



  const deleteeachtodo=(value)=>{
    const filterdeleteeachtodo=list.filter((eachtodo,i)=>i!==value)
    console.log(filterdeleteeachtodo)
      setlist(filterdeleteeachtodo)

  }

  return (
    <>
      <h1 className="text-center">to do list</h1>
      <div className=" container  border border-warning d-flex  h-100 flex-wrap justify-content-center ">
        <input
          className="w-50"
          type="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />

        <button type="button" className="btn btn-success  mx-2" onClick={addtask}>Add ToDo</button>
  <button type="button" className="btn btn-warning" onClick={clearall}> Clear ToDoList</button>

        {list.map((eachlist, index) => {
          return (
            <React.Fragment key={index}>
              <div className="container w-75 d-flex flex-wrap  justify-content-between border border-danger h-100  mt-2">
                <p contentEditable="true">{eachlist}</p>
                <div className="d-flex gap-2 align-items-center">
                  <button type="button"  className="btn btn-primary ">
                    Update
                  </button>
                  <button type="button" className="btn btn-danger" onClick={()=>deleteeachtodo(index)}>
                    Delete
                  </button>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Todolist;
