const Bootstrapnavbar=()=>{
    const value=1
    return(
        <>
{/* conditional rendering in bootstrap... */}
{/* <nav class={value?"navbar navbar-expand-lg bg-primary"  : "navbar navbar-expand-lg bg-success"}> */}
<nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">
            contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">
            about_us
          </a>
        </li>
       
      
       
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success text-white border border-2 border-dark" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>


        
        </>

    )
}

export default Bootstrapnavbar;