import { Form, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useContext } from "react";
import { passdata, passtheme } from "../Navigationscreen/navigation";

const CustomNavbar = () => {
  // const { name } = useContext(passdata);
  const { theme, handledarkandlightmodes,card, count, currentstate } =
    useContext(passtheme);
  // console.log('currentstate : ',currentstate)

  const handledarkmode = () => {
    // Controlling the state which is created globally...
    handledarkandlightmodes();
  };

  return (
    <nav
    className={`d-flex position-fixed top-0 z-1 w-100 justify-content-center navbar navbar-expand-sm ${theme ? 'text-white bg-dark' : 'bg-light navbar-light'}`}
  >
  
  
      <Navbar expand="lg" >
        <Container className="d-flex justify-content-center"  >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} className={theme && "text-white"} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={Link} className={theme && "text-white"} to="/about">
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={theme && "text-white"}
                to="/setting"
              >
                Setting
              </Nav.Link>
              <Nav.Link as={Link} className={theme && "text-white"} to="/blog">
                Blog-page
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={` ${theme && "text-white"} `}
                to="/blog"
              >
                cart {count}
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={` ${theme && "text-white"} `}
                to="/blog"
              >
                useReducerCount {currentstate.count}
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={` ${theme && "text-white"} `}
                to="/usecallback"
              >
                usecallback
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={` ${theme && "text-white"} `}
                to="/customhook"
              >
                Customhook
              </Nav.Link>
              
              <Nav.Link
                as={Link}
                className={` ${theme && "text-white"} `}
                to="/ReduxScreen"
              >
                ReduxScreen
              </Nav.Link>
              

              <button
                onClick={handledarkmode}
                className={`h-50  ${
                  theme ? "bg-light text-dark" : "bg-dark text-light"
                }`}
                style={{
                  borderRadius: "50%",
                }}
              >
                {theme ? "☀️" : "🌙"}
              </button>

              <Nav.Link
                as={Link}
                className={` ${theme && "text-white"} `}
                to="/Addtocart"
              >
                <button type="button" className="btn btn-primary position-relative">
                cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {card.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
              </Nav.Link>

             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default CustomNavbar;
