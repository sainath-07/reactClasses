
// Shorcut  to write the Arrow function if it is returning the single line statement


// const Buttoncomponent1 = () => <button>button</button>
 

const Buttoncomponent1= () => {
   const  b=0
    
    if(b){
        return (
            <button> if button</button>
        )

    }
    else{
        return (
            <button> else button</button>
        )
    }
}



export default Buttoncomponent1