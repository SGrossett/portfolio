import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, Offcanvas, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
function ProfileNav() {
  return (
    <>
      <Navbar bg="light" expand="sm" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Selene Grossett</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                Selene Grossett
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