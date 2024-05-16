import { useRef, useState } from "react";

const Forms = () => {
  const usernameref = useRef(null);
  const userpassref = useRef(null);


  const [initial, updateinitial] = useState(false);

  const formsubmit = (e) => {
    e.preventDefault();
    const usercheck = usernameref.current.value;
    const userpasscheck = usernameref.current.value;

    if (usercheck.length < 3 || userpasscheck.length<3) {
      updateinitial(true);
    } else {
      alert("Login successfull...");
    }
  };

  return (
    <>
      <form onSubmit={formsubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            ref={usernameref}
          />
        </div>
        {initial && (
          <span
            style={{
              color: "red",
            }}
          >
            Please enter the character more than 3
          </span>
        )}
            <br />
        {/* <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          ref={userpassref}
        />
         {initial && (
          <span
            style={{
              color: "red",
            }}
          >
            Please enter the character more than 3
          </span>
        )} */}
        <br />
        <button
          style={{
            border: "2px solid black",
          }}
          type="submit"
          className="btn btn-default"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Forms;
