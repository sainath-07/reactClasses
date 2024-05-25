import { useContext, useEffect, useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [emailvalidate, setemailvalidate] = useState([]);
  // useState, passed the state to each and every input element in the form

  const [username, setusername] = useState("");
  const [Country, setCountry] = useState("India");
  const [gender, setgender] = useState("");

  // Navigate to login page.......
  const navigate = useNavigate();

  // password input field.
  const [Emailid, setEmailid] = useState("");
  // validating the password
  // boolean value
  const [Emailvalue, setEmailvalue] = useState(null);
  const [Emailerror, setEmailerror] = useState(null);
  const onchangeemail = (event) => {
    let check = event.target.value;
    setEmailid(check);

    if (check.length < 6 || !check.includes("@")) {
      setEmailerror("Enter the valid Email id.");
      setEmailvalue(true);
    } else {
      setEmailerror("");
      setEmailvalue(false);
    }
  };

  // password input field.
  const [Password, setPassword] = useState("");
  // validating the password
  // boolean value
  const [value, setvalue] = useState(null);
  const [showerror, setshowerror] = useState(null);
  const onchangepassword = (event) => {
    let check = event.target.value;
    setPassword(check);

    if (check.length > 12 || check.length <= 6) {
      setshowerror("Password must be between 6 to 12 characters.");
      setvalue(true);
    } else {
      setshowerror("");
      setvalue(false);
    }
  };

  // Phone number input field
  const [PhoneNumber, setPhoneNumber] = useState("");
  // boolean value
  const [phvalue, setphvalue] = useState(null);
  const [showpherror, setshowpherror] = useState(null);
  const onchangephoneNumber = (event) => {
    let check = event.target.value;
    setPhoneNumber(check);

    if (check.length !== 10) {
      setphvalue(true);
      setshowpherror("Phone Number must contain only 10 digits");
    } else {
      setphvalue(false);
      setshowpherror("");
    }
  };


  // Check whether all fields are filled are not...
  const Isvalidate = () => {
    let isproceed = true;
    let errormessage = "please fill input fields in form";

    if (
      Emailid == "" ||
      Emailid == null ||
      PhoneNumber == "" ||
      PhoneNumber == null ||
      username == "" ||
      username == null ||
      PhoneNumber == "" ||
      PhoneNumber == null
    ) {
      isproceed = false;
    }

    if (!isproceed) {
      toast.error(errormessage);
    }

    return isproceed;
  };

  // if above function is true then only details will be stored in db
  const handleform = (e) => {
    e.preventDefault();

    if (Isvalidate()) {
      let userdetails = {
        Emailid,
        Password,
        username,
        PhoneNumber,
        Country,
        gender,
 
      };

      console.log(userdetails);

     
   

    fetch("  http://localhost:8000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userdetails),
    })
      .then((success) => {
        console.log(success);
        toast.success("registered successfully");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("singup faild", err);
      });
    }
  };





  return (
    <>
      <div className="text-center">RegisterForm</div>

      <div className="offset-lg-3 col-lg-6">
        <form className="container" autoComplete="off" onSubmit={handleform}>
          <div className="card">
            <div className="card-header bg-dark text-white fs-5  text-center ">
              User singup form
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email id <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      onChange={onchangeemail}
                      value={Emailid}
                    />
                    {Emailvalue && (
                      <span style={{ color: "red" }}>{Emailerror}</span>
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="Password" className="form-label">
                      Password <span className="text-danger">*</span>
                    </label>
                    <input
                      value={Password}
                      onChange={onchangepassword}
                      type="Password"
                      className="form-control"
                      id="Password"
                    />
                    {value && <span style={{ color: "red" }}>{showerror}</span>}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="username" className="form-label">
                      user Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                      className="form-control"
                      id="username"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="PhoneNumber" className="form-label">
                      PhoneNumber <span className="text-danger">*</span>
                    </label>

                    <input
                      type="tel"
                      id="PhoneNumber"
                      className="form-control"
                      value={PhoneNumber}
                      onChange={onchangephoneNumber}
                    ></input>

                    {phvalue && (
                      <span style={{ color: "red" }}>{showpherror}</span>
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Country <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select mt-2"
                      value={Country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="India">India</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Srilanka">Srilanka</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      select gender <span className="text-danger">*</span>
                    </label>

                    <br />
                    <input
                      className="mt-3"
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      checked={gender === "male"}
                      onChange={(e) => setgender(e.target.value)}
                    />
                    <label htmlFor="male">Male &nbsp;</label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      checked={gender === "female"}
                      onChange={(e) => setgender(e.target.value)}
                    />
                    <label htmlFor="female">female</label>
                  </div>
                </div>

                {/* <div className="col-lg-12 mt-2">
                  <div className="form-group">
                    <label>
                      Address <span className="text-danger">*</span>{" "}
                    </label>
                    <div className="form-floating">
                      <textarea
                        autoComplete="off"
                        className="form-control"
                        value={Address}
                        onChange={(e) => setAddress(e.target.value)}
                        // placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        style={{ height: 100, resize: "none" }}
                      />
                      <label
                        className="mt-1 p-0 text-sm text-wrap"
                        htmlFor="floatingTextarea2"
                      >
                        eg : 19/2/3/A,Area,street,city,state.
                      </label>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className=" d-flex justify-content-center">
              <div
              //  className="border border-success"
              >
                <button className="btn btn-success mb-3">Register</button>{" "}
                &nbsp;
              </div>
              {/* <div className="border bg-dark text-white">
                <Link className="text-decoration-none text-white px-1">loginpage</Link>           
              </div> */}
            </div>
          </div>
        </form>

        <div className="mt-3 d-flex justify-content-center">
          {/* <button>  </button> */}

          <button className="btn btn-primary " type="submit">
            <Link className="text-white text-decoration-none" to={"/login"}>
              Login
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
