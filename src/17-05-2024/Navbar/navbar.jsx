import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item nav-link">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="nav-item nav-link">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="nav-item nav-link">
                <Link to={"/setting"}>Setting</Link>
              </li>
              <li className="nav-item nav-link">
                <Link to={"/blog"}>Blog-page</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
