// Controlled forms

import { useState } from "react";

const Login = () => {
  const [custommessage, setcustommessage] = useState(false);

  const [loginerrormessage, setloginerrormessage] = useState(null);

  // userName hold the values.
  const [userName, updateuserName] = useState(null);

  const [gendermale, updategendermale] = useState("male");
  const [genderfemale, updategenderfemale] = useState("female");

  // eleusername shows the error message if condition is not matched.
  const [eleusername, eleupdateusername] = useState(false);

  // showbtn will display the submit only showbtn is true
  const [showbtn, updateshowbtn] = useState(true);

  //onchangeusername function setting the condition
  const onchangeusername = (event) => {
    console.log(event.target.value);

    const checkusernamelength = event.target.value;
    updateuserName(checkusernamelength);

    if (checkusernamelength.length > 10) {
      updateshowbtn(false);
      eleupdateusername("Please enter the characters less than 10");
    } else {
      eleupdateusername(null);
      updateshowbtn(true);
    }
  };

  const checkgendermale = (event) => {
    console.log(event.target.value);
  };
  const checkgenderfemale = (event) => {
    console.log(event.target.value);
  };

  // userPassword holds the value
  const [userPassword, setUserPassword] = useState(null);
  // eleuserpassword shows the error message if condition is not matched.

  const [eleuserpassword, seteleuserpassword] = useState(null);

  //onchangeuserpassword function setting the condition
  const onchangeuserpassword = (event) => {
    const checkuserpasswordlength = event.target.value;
    setUserPassword(checkuserpasswordlength);

    if (checkuserpasswordlength.length > 10) {
      updateshowbtn(false);
      seteleuserpassword("Please enter the characters less than 10");
    } else {
      seteleuserpassword(null);
      updateshowbtn(true);
    }
  };

  const formsubmit = (e) => {
    e.preventDefault();

    const userdetails = {
      username: userName,
      password: userPassword,
      gender : genderfemale || gendermale,
    };

    console.log(userdetails);

    servercall(userdetails);
  };

  const servercall = (userdetails) => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userdetails),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.message) {
          setloginerrormessage(response.message);
        } else {
          // alert("login success");
          setcustommessage(true);
        }
      });
  };

  return (
    <>
      {custommessage ? (
        <h1>Login successfully........!</h1>
      ) : (
        <>
          <form onSubmit={formsubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={userName}
                onChange={onchangeusername}
              />
            </div>
            {eleusername && <span style={{ color: "red" }}>{eleusername}</span>}
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input
                type="Password"
                className="form-control"
                id="Password"
                name="Password"
                value={userPassword}
                onChange={onchangeuserpassword}
              />
            </div>
            {eleuserpassword && (
              <span style={{ color: "red" }}>{eleuserpassword}</span>
            )}
            <br />
            <p>select your gender :</p>
            <input
              type="radio"
              name="gender"
              id="male"
              value={gendermale}
              onChange={checkgendermale}
            />
            <label for="male">male</label> <br />
            <input
              type="radio"
              name="gender"
              value={genderfemale}
              id="female"
              onChange={checkgenderfemale}
            />
            <label for="female">female</label>
            {loginerrormessage && (
              <span style={{ color: "red" }}>{loginerrormessage}</span>
            )}
            <br />
            {showbtn ? (
              <>
                <button
                  style={{
                    marginTop: "15px",
                    outline: "none",
                  }}
                >
                  Submit
                </button>
              </>
            ) : (
              <>
                <button
                  disabled
                  style={{
                    marginTop: "15px",
                    outline: "none",
                  }}
                >
                  Submit
                </button>
              </>
            )}
          </form>
        </>
      )}
    </>
  );
};
export default Login;
