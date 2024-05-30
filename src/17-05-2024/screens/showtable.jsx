import React, { useContext } from "react";
import { passtheme } from "../Navigationscreen/navigation";

const ShowUserInfo = () => {
  const { displaydata } = useContext(passtheme);
  console.log(displaydata)

  return (
    <>
        <table className="table">
        <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                </tr>
              </thead>
      {displaydata.map((each, i) => {
        const {res:{name},res:{password}}=each
        return (
          <React.Fragment key={i}>
             
              <tbody>
                <tr>
                  <th scope="row">{i+1}</th>
                  <td>{name}</td>
                  <td>{password}</td>
                </tr>
              </tbody>
          </React.Fragment>
        );
      })}
      </table>
    </>
  );
};
export default ShowUserInfo;
