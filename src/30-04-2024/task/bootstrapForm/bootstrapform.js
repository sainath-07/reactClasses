import "./formstyle.css"

const BootstrapForm =()=>{
    return(
      
        <form className="container mt-5 border border-success  bg-light rounded w-40 pb-5">
          <h4 className="text-center ">Login Form</h4>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp" 
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
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      First Name
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp" 
    />
 
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Second Name
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>

  <p>Select Gender :</p>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault1"
    />
    <label className="form-check-label" htmlFor="flexRadioDefault1">
      Male
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault2"
      defaultChecked=""
    />
    <label className="form-check-label" htmlFor="flexRadioDefault2">
      Female
    </label>
  </div>

  <div className="d-flex justify-content-center">

  <button type="submit" className="btn btn-primary ">
    Submit
  </button>
  </div>
</form>


    )
}

export default  BootstrapForm