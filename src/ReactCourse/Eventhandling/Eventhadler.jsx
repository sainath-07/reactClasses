const EventHandler=()=>{

    function clickbuttonevent(){
        alert("Button clicked......")

    }
    
//    const clickbuttonevent=()=>{
//         alert("Button clicked......")

//     }
    return(
        // <button onClick={()=>clickbuttonevent("function")}>Click Button</button>
        // <button onClick={function(){clickbuttonevent("function")}}>Click Button</button>
        // <button onClick={()=>alert("function")}>Click Button</button>
        <input type="text" onKeyUp={()=>{
            clickbuttonevent("click")
        }} />
    )
}

export default EventHandler;