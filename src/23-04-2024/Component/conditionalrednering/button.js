
// Shorcut  to write the Arrow function if it is returning the single line statement

import ListComponent from "./list"



// const Buttoncomponent1 = () => <button>button</button>
 

const Buttoncomponent1= () => {
   const  b=0

    
   return(
    <>


    {
   
    // Ternarory operator

    //  b
    //  ? 
    //  <ListComponent/> 
    //  :
    //  null
    
 
    // Shortcricut operator
    // b && <ListComponent/> 

    // don't use the shortcricut operator for below case
    //  if b varaible value is 0

      b && <ListComponent/> 

    




    }
    </>
   )


    


    //  If else condition
    // if(b){
    //     return (
    //         <ListComponent/> 
    //     )

    // }
    // else{
    //     return (
    //         <button> else button</button>
    //     )
    // }
}



export default Buttoncomponent1