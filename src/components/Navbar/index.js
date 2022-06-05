import logo from './images/bwProfileLogo.png';
import blackLogo from './images/profileLogo.png';
import { Nav, Navbar, Container, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
              className="d-inline-block align-top mx-4"
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
                
                <LinkContainer to='/'>
                  <Nav.Link className='text-white'>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/about'>
                  <Nav.Link className='text-white'>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/projects'>
                  <Nav.Link className='text-white'>Projects</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/resume'>
                  <Nav.Link className='text-white'>Resume</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/contact'>
                  <Nav.Link className='text-white'>Contact</Nav.Link>
                </LinkContainer>
              </Nav>
             
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      
    </>
  )
}

export default ProfileNav;