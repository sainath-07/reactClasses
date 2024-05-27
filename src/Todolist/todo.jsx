import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

const Todolist = () => {
  const [text, settext] = useState("");
  const [list, setlist] = useState([]);
  const [value, setvalue] = useState(null);

  const [updatecontent, setupdatecontent] = useState(true);
  const [check,setcheck]=useState(null)

  const handleudpate=()=>{
         const checklist=list.map((each,i)=>{
          if(check===i){
            return  text
          }
          else{
            return each
          }
         })

         setlist(checklist)
         setupdatecontent(true)
         settext("")
  }


  const clearall = () => {
    setlist([]);
  };

  const addtask = () => {
    if (text != "" && text != false) {
      setlist([...list, text]);
      setvalue(false);
      settext("");
    } else {
      
      setvalue(true);
    }
  };

  console.log(list);

  const deleteeachtodo = (value) => {
    const filterdeleteeachtodo = list.filter((eachtodo, i) => i !== value);
    console.log(filterdeleteeachtodo);
    setlist(filterdeleteeachtodo);
  };



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

        {
          updatecontent ?

        <button
          type="button"
          className="btn btn-success  mx-2"
          onClick={addtask}
        >
          Add ToDo
        </button>

        :
        <button
        type="button"
        className="btn btn-success  mx-2"
        onClick={handleudpate}
      >
        udpateTodo
      </button>
        }
        <button type="button" className="btn btn-warning" onClick={clearall}>
          {" "}
          Clear ToDoList
        </button>

        {list.map((eachlist, index) => {
          return (
            <React.Fragment key={index}>
              <div className="container w-75 d-flex flex-wrap  justify-content-between border border-danger h-100  mt-2">
                <p contentEditable="true">{eachlist}</p>
                <div className="d-flex gap-2 align-items-center">
           
                  <GrAdd onClick={() => {
                  setcheck(index) ;
                    setupdatecontent(false)
                    settext(eachlist)
                  }
                  }  />
                  <MdDelete onClick={() => deleteeachtodo(index)} />
                  {/* <button type="button" className="btn btn-danger" onClick={()=>deleteeachtodo(index)}>
                    Delete
                  </button> */}
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
