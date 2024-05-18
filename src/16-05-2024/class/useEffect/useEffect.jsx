import React, { useEffect, useState } from "react";
import axios from "axios";
import { checkcondition, checktodos } from "../utills/function";



const Useeffect = () => {
  const [setdata, udpatesetdata] = useState([]);
  const [count, setcount] = useState(1);
  const [eachtodo, seteachtodo] = useState({});

  //   useeffect will work as componentdidmount
  useEffect(() => {
    fetchapi();
  }, []);

  //   useeffect will word as componentdidupdate
  useEffect(() => {
    fetcheachitem();
    document.title = `count :  ${count}`;
  }, [count]);

  //  fetch single data
  const fetcheachitem = async () => {
    let result = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${count}`
    );
    console.log(result.data);
    // console.log(result)
    if (result.status === 200) {
      seteachtodo(result.data);
    }
  };

  //  to fetch all data
  const fetchapi = async () => {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    if (response.status === 200) {
      udpatesetdata(response.data);
    } else {
      alert("");
    }
  };

  const updatecount = () => {
    setcount(count + 1);
  };



  return (
    <>
      <h2>UseEffect </h2>

      <h1>{count}</h1>
      <button onClick={updatecount}>Increment</button>
      <hr />
      <h1>count wise data displayed below</h1>

     {
        checkcondition(eachtodo) && <p>{eachtodo.title}</p>
     }

      <hr />
      {checktodos(setdata) ? (
        <>
          {setdata.map((eachitem) => {
            const { title, id } = eachitem;
            return (
              <React.Fragment key={id}>
                {id <= 150 && <h2>{`${id} ${title}`}</h2>}
              </React.Fragment>
            );
          })}
        </>
      ) : null}
    </>
  );
};
export default Useeffect;
