import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom'


export default function Nav1() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/');
  };
  return (
    <Navbar expand="lg" className="bg-teal-700">
      <Container>
        <Navbar.Brand >Hotelfy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleNavigation} href="#home">Home
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

