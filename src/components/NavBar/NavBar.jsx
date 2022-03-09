import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  
  return (
    <Navbar bg="" className="py-3 bg-blue">
      <Container>
        <NavbarBrand className="text-white">
          <Link to="/" >Lecture Materials</Link>
        </NavbarBrand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
