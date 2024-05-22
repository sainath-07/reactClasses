import { Form, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useContext } from "react";
import { passdata, passtheme } from "../Navigationscreen/navigation";

const CustomNavbar = () => {
  // const { name } = useContext(passdata);
  const { theme, handledarkandlightmodes,count } = useContext(passtheme);
  // console.log('passeddata : ',name)

  const handledarkmode = () => {
    // Controlling the state which is created globally...
    handledarkandlightmodes();
  };

  return (
    <nav
      className={
        theme
          ? "navbar navbar-expand-sm text-white bg-dark "
          : "navbar navbar-expand-sm bg-light navbar-light"
      }
    >
      <Navbar expand="lg" 
     
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav"   />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto" >
              <Nav.Link as={Link}  className={theme && "text-white"}   to="/">
                Home
              </Nav.Link>
             
              <Nav.Link as={Link} className={theme && "text-white"} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link}  className={theme && "text-white"} to="/setting">
                Setting
              </Nav.Link>
              <Nav.Link as={Link}  className={theme && "text-white"} to="/blog">
                Blog-page
              </Nav.Link>
              <Nav.Link as={Link}  className={ ` ${theme && "text-white"} `}to="/blog">
               cart {count}
              </Nav.Link>

              <button onClick={handledarkmode} className={` ${theme ? "bg-light text-dark" : "bg-dark text-light" }`}
              style={{
                borderRadius: "50%"
              }}
              > 
              {theme ?  "☀️" : "🌙" }
              </button>

              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default CustomNavbar;
