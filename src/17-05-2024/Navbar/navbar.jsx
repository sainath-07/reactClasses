import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} className="fs-4 text-dark" to="/">Home</Nav.Link>
            <Nav.Link as={Link} className="fs-4 text-dark"  to="/about">About</Nav.Link>
            <Nav.Link as={Link} className="fs-4 text-dark"  to="/setting">Setting</Nav.Link>
            <Nav.Link as={Link}  className="fs-4 text-dark" to="/blog">Blog-page</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
