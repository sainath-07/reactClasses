import { Component } from "react";

class Todolist extends Component{

    state={
        todos : ["apple","orange"]
    }

    // constructor(){
    //     super()

    //     this.state={
    //         todos : ["apple","orange"]
    //     }
    // }
    

    //  doubt
    addnewdata=()=>{
        const newstate =[...this.state.todos,"grapes"]


        this.setState({
            todos : newstate
        })
    }


    clearAll=()=>{
        const  emtpytodo=[]

        this.setState({
            todos :emtpytodo
        })
    }

    deleteeachtodo=(index)=>{
       

        const filteredarray = this.state.todos.filter((item,i)=>i!==index)

        this.setState({
            todos : filteredarray
        })

    }


    updateeachtodo=(index)=>{
        const updateeachfriuit=this.state.todos.map((eachfruit,i)=>{
            if(i==index){
                return "kiwi"
            }
            else{
                return eachfruit
            }
        })


        this.setState({
            todos : updateeachfriuit
        })
    }


    render(){
        return(
            
            <>
            <h1>To do list</h1>
            <button onClick={this.addnewdata}>Add</button>
            <button onClick={this.clearAll}>ClearAll</button>
            {
                this.state.todos.map((ele,index)=>{
                    return(
                        <>
                        
                        <h2>{index+1+" "+ele}</h2>
                        <button onClick={()=>this.deleteeachtodo(index)}>Delete the each todo</button>
                        <button onClick={()=>this.updateeachtodo(index)}>update the each todo</button>
                        </>
                    )
                })
            }
            </>
        )
    }

}
export default Todolist