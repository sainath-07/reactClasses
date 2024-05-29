import { useDispatch, useSelector } from "react-redux";
import { buyBookAction, returnBackBook } from "../../ReduxCourse/May27/Redux/action";

const ReduxScreen = () => {


  const reduxstate = useSelector((state) => state);
//   console.log(reduxstate,"reduxstate");

  const Dispatch = useDispatch();
//   console.log(Dispatch,"Dispatch")


const handleincrement=()=>{
    Dispatch(buyBookAction())
}
const handledecrement=()=>{
    Dispatch(returnBackBook())
}

  
  return (
    <>
      <h1 className="text-center">Redux Screen</h1>

      <h2>Book_Count : {reduxstate.bookCount}</h2>
      <button onClick={handleincrement}>buyBook</button>
      <button onClick={handledecrement}>returnBook</button>
    </>
  );
};

export default ReduxScreen;
