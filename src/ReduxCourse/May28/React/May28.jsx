import { useDispatch, useSelector } from "react-redux";
import { buyBookAction, returnBackBook } from "../../May27/Redux/action";
import { handleruser } from "../Redux/actions";
import { useState } from "react";

const May28 = () => {

    const [set,setvalue]=useState(true)
  const {
    books: { bookCount },
    profile: {
      profile: { email },
    },
    profile: {
      profile: { name },
    },
    profile: {
      profile: { value },
    },
    profile: {
      profile: { mobileno },
    },
  } = useSelector((state) => state);

  // console.log(result,"callselector")

  const dispatchaction = useDispatch();

  const IncreaseBookcount = () => {
    dispatchaction(buyBookAction());
  };
  const DecreaseBookcount = () => {
    dispatchaction(returnBackBook());
  };

  const changeuserdetails = () => {
    dispatchaction(
      handleruser({
        name: "Veda",
        email: "Veda@gmail.com",
        mobileno: 2057896,
        value:!value,
        
         
      }),
      setvalue(!set)
    );
  };

  return (
    <>
      <h1 className="text-center">May 28</h1>
      <h1> Book_Count :: {bookCount}</h1>
      <button onClick={IncreaseBookcount}>Increase</button>
      <button onClick={DecreaseBookcount}>Decrease</button>

      <hr />
      <h1>User details</h1>

      {set==value ? (
        <>
          <h4>{email}</h4>
          <h4>{mobileno}</h4>
          <h4>{name}</h4>
        </>
      ) : (
        <>
         <h4>{email}</h4>
          <h4>{mobileno}</h4>
          <h4>{name}</h4>
         </>
      )}
      {/* <h4>{email}</h4>
        <h4>{mobileno}</h4>
        <h4>{name}</h4> */}

      <button onClick={changeuserdetails}>
        {set ? <>sainath</> : <>veda</>}
      </button>
    </>
  );
};

export default May28;
