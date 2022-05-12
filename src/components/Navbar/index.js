import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/bwProfileLogo.png';
import blackLogo from './images/profileLogo.png';
import { Nav, Navbar, Container, Offcanvas } from 'react-bootstrap';

function ProfileNav() {
  return (
    <>
      <Navbar bg="dark" expand="sm" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="45"
              height="45"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                <img
                alt=""
                src={blackLogo}
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">About Me</Nav.Link>
                <Nav.Link href="#action2">Projects</Nav.Link>
                <Nav.Link href="#action3">Resume</Nav.Link>
                <Nav.Link href="#action4">Contact</Nav.Link>
                <Nav.Link href="#action5">Extras</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      
    </>
  )
}

export default ProfileNav;