import './footer.css';
import React from 'react'
import { Container, Nav, Col } from 'react-bootstrap';
import { RiMoonFill } from 'react-icons/ri';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub, BsMedium } from 'react-icons/bs';

function Footer() {
  return (
    <Container className='d-flex footer-border mt-5' fluid>

      <Col className='d-flex'>
        <p className='mb-0 nav-padding text-white'>
          <span>Built by &nbsp;</span>
          <span className='my-name'>Selene <RiMoonFill className='crescentMoon'/> Grosset</span>
        </p>
      </Col>
      <Col>
        <Nav className='justify-content-end'>
          <Nav.Link href="https://github.com/SGrossett" target='_blank' className='text-neonPink p-2'>
            <BsGithub size={22} />
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/selene-grossett/" target='_blank' className='text-neonPink p-2'>
            <FaLinkedinIn size={22} />
          </Nav.Link>
          <Nav.Link href="https://medium.com/@selene_816" target='_blank' className='text-neonPink p-2'>
            <BsMedium size={22} />
          </Nav.Link>
        </Nav>
      </Col>
    </Container>
  )
}

export default Footer