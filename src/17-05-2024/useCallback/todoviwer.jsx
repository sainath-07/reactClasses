import React from "react"

const Todoviewer=({todo,addtodosfun})=>{

    console.log("todoviewer ..........")
    return(
        <>
        <h1>Todoviewer</h1>
        <button onClick={addtodosfun}>added todo viewer</button>

        {
            todo.map((eachtodo,index)=>{
                return(
                    <React.Fragment key={index}>
                       <p>{index+1} {eachtodo}</p>
                    </React.Fragment>
                )
            })
        }
         </>
    )
}
// export default Todoviewer
export default React.memo(Todoviewer) //HOC