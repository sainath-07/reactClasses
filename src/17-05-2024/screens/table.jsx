import { useContext, useState } from "react";
import { passtheme } from "../Navigationscreen/navigation";


const Userform = () => {

    const {submitform,handleNameChange,handlePasswordChange,userdata,setValue}=useContext(passtheme)


    const {displaydata}=useContext(passtheme)
    console.log(displaydata)




  // console.log(displaydata,"displaydata")



  return (
    <div className="container w-50">
      <form onSubmit={submitform}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={userdata}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={userdata}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Userform;
