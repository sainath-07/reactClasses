import React, { Component } from "react";

class Todolisttask extends Component {
  state = {
    todos: [{ text: "orange" }, { text: "apple" }],
  };

  addnewdata = () => {
    const newarr = [...this.state.todos, { text: "grapes" }];
this.state.todos=newarr
    this.setState({
      todos: newarr,
    });
  };


  deleteeachtodo=(index)=>{
          const filtereachtodo=this.state.todos.filter((eachtodo,i)=>i!=index)

           this.setState({
            todos : filtereachtodo
           })
  }


  updatedelteeachtodo=(index)=>{
      const filterupdatetodo=this.state.todos.map((udpateeachtodo,i)=>{
     
        if(i==index){
            udpateeachtodo.text="added"
          return udpateeachtodo

        }
        else{
            return udpateeachtodo
        }
      })


      this.setState({
        todos : filterupdatetodo
      })
  }

  removeall=()=>{
        const todos=[]

        this.setState({
            todos :todos
        })
  }



  render() {
    return (
      <React.Fragment >
        <h1>To do list</h1>
        <button onClick={() => this.addnewdata()}>Add</button>
        <button onClick={() => this.removeall()}>Removeall </button>

        {this.state.todos.map((eachobject,index) => {
          return (
            <React.Fragment key={index}>
              <h1>{index+1+" "+eachobject.text}</h1>
              <button onClick={()=>this.deleteeachtodo(index)}>Delete</button>
              <button onClick={()=>this.updatedelteeachtodo(index)}>update</button>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}
export default Todolisttask;
