import { useState } from "react";

const Usestate = () => {
  const initialvalue = 0;
  const [count, updaterfunction] = useState(initialvalue);

  // updaterfunction can have 2 ways
  // 1. direct current state
  // 2. will pass a function

  const updatecount = () => {

    //  direct current state :
    //  updaterfunction(count+1)


    //  by passing a function :
    //   for timers we will use the below syntax....
    updaterfunction(value=>value+1)

    

    // arrow function passing as argument in the updaterfunction...
    // const hello=(count)=>{
    //    return  count+1;
    // }
    // updaterfunction(hello)
    //     // here value is parameter which represents the count , we can use any variable name it represent the state...
    //     // react will consider as sepearte seperate state updates
  };

  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={updatecount}>update count</button>
    </>
  );
};
export default Usestate;
