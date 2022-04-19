import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
import {FaUserGraduate} from 'react-icons/fa';
import {useTheme} from '../../context/ThemeProvider'

const NavBar = () => {

  const isDark = useTheme();

  const dynamicClass = isDark?'darkNav':'';
  const dynamicBorder = isDark?'':'bottom-border';
  
  return (
    <Navbar bg="" className={`py-3 bg-blue ${dynamicBorder} ${dynamicClass }`}>
      <Container>
        <NavbarBrand className="text-main fw-bold fs-4">
          <Link className={dynamicClass } to="/" ><FaUserGraduate size={30} className="pb-2"/> Lecture Materials</Link>
        </NavbarBrand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
