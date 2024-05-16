import { useRef } from "react";

const Forms = () => {
  const useNameRef = useRef(null);

  const formSubmit=()=>{
     
  }

  return (
    <>
      <form onSubmit={formSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            ref={useNameRef}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Forms;
